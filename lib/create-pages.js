import { join } from "path";
import { page as pageTemplates, annotations as annTemplates } from "./templates/index.js";
import { dataToFile } from "./utils.js";
import { joinMarkup } from "@ulu/markdown-output-utils";
import { PLUGIN_NAME } from "./constants.js";
const missingAnnTemplates = [];

export function createPages({ groups, info, options }) {
  const templates = {
    page: Object.assign({}, pageTemplates, options.pageTemplates),
    annotations: Object.assign({}, annTemplates, options.annotationTemplates),
  };
  
  if (options.debug) {
    console.time("sassdoc:plugin:createPages");
  }
  // For each group (array of it's items) create a page
  const pages = Object.entries(groups)
    .map(([groupName, group]) => { 
      const groupPath = `${ options.pathBase }${ groupName }/`;
      // Filling in this information here, maybe at somepoint this conversion to pages 
      // could be adjustable So keeping it out of parse data
      group.forEach(item => {
        item.groupPath = groupPath;
        item.path = `${ groupPath }#${ item.id }`;
      });
      try {
        const title = options.pageTitleFormatter(info.groupDisplayNames[groupName] || groupName);
        const pageData = { groupName, title, group, groups, info };
        return {
          path: groupPath,
          content: createContent(pageData, templates, options),
          frontmatter: { title, sassdocGroupName: groupName }
        };
      } catch (error) {
        console.error(PLUGIN_NAME, `Error creating page for (${ groupName })\n`, error);
      }
    });

  if (options.debug) {
    console.timeEnd("sassdoc:plugin:createPages")
  }
  return pages.filter(page => page).sort(options.sort);
}


function createContent(pageData, templates, options) {
  const {
    item:    itemTemplate,
    section: sectionTemplate,
    group:   groupTemplate
  } = templates.page;
  const { group, groupName } = pageData;
  const { annotations, byType } = options;
  // Headline level for annotations
  const headlineLevel = byType ? 4 : 3;
  const ctxData = {
    options,
    headlineLevel,
    ...pageData
  };

  function render(items) {
    const $items = items.map(item => {
      const data = { ...ctxData, item };
      const $annotations = annotations.map(a => {
        const template = templates.annotations[a];
        if (template) {
          return template(data);
        } else {
          missingAnnTemplate(a)
        }
      });
      return itemTemplate(data, joinMarkup($annotations));
    });
    return joinMarkup($items);
  }
  // Note: "$" denotes an array of markup
  let $content;

  // Allow user to view by type or in the order parsed
  if (byType) {
    let sections = createSections(group, options);
    
    $content = Object.entries(sections)
      .filter(([,items]) => items.length)
      .map(([sectionName, items]) => {
        return sectionTemplate({ sectionName }, render(items))
      });
      
    if (options.debugToDir) {
      dataToFile(join(options.debugToDir, `page-sections.json`), sections);
    }
  } else {
    $content = render(group);
  }
  
  const $group = groupTemplate(ctxData, joinMarkup($content));

  if (options.debugToDir) {
    dataToFile(join(options.debugToDir, `group-page-${ groupName }.md`), $group);
  }
  
  return $group;
}

function createSections(group, options) {
  const { contentEnabled, contentInline } = options;
  const first = group[0];
  const getType = item => item && item.data.context.type;
  // Use reduce so we can add in content blocks
  const byType = by => group.reduce((acc, item, index) => {
    const next = group[index + 1];
    if (getType(item) === by) {
      acc.push(item);
      if (contentEnabled && contentInline && getType(next) === "content") {
        acc.push(next);
      }
    }
    return acc;
  }, []);

  let body = [];
  if (contentEnabled) {
    if (contentInline) {
      if (getType(first) === "content") {
        body.push(first);
      }
    } else {
      body = byType("content");
    }
  }

  // If content is enabled default is the first content section becomes body
  // when the content is not inline all content sections are grouped together in the body
  return {
    body:           body,
    variables:      byType("variable"),
    mixins:         byType("mixin"),
    functions:      byType("function"),
    placeholders:   byType("placeholder"),
    CSS:            byType("css")
  };
}


function missingAnnTemplate(n) {
  if (missingAnnTemplates.includes(n)) return;
  missingAnnTemplates.push(n);
  console.error(PLUGIN_NAME, "Missing annotation template for", n);
}

