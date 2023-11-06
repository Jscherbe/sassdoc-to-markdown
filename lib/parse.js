import sassdoc from 'sassdoc'
import { annotations } from './annotations/index.js'
import { regex } from './utils.js'
import { PLUGIN_NAME } from './constants.js'

export async function parse(options) {
  const { 
    itemTitle,
    sassdocOptions, 
    dir,
    customAnnotations
  } = options;
  let sassdocItems;
  // console.log('customAnnotations:\n', customAnnotations);
  const theme = () => {}; // Blank theme is used to add annoations
  const info = {
    groupDescriptions: {},
    groupDisplayNames: {}
  };
  const pluginAnnotations = annotations.map(a => a(options, info));
  theme.annotations = [ ...pluginAnnotations, ...customAnnotations ];
  const parserOptions = Object.assign({}, sassdocOptions, { theme });

  try {
    sassdocItems = await sassdoc.parse(dir, parserOptions);
  } catch (error) {
    console.error(error);
  }
  if (!sassdocItems) {
    console.error(PLUGIN_NAME, "No data from sassdocs!");
    return;
  }
  
  // First put items into groups groups = { exampleName: [], ... }
  const groups = sassdocItems.reduce((all, data) => {
    const groupName = data.group[0];
    if (!all[groupName]) all[groupName] = [];
    const $item = { data, groupName };
    // Add references both ways
    data.$item = $item;
    all[groupName].push($item);
    return all;
  }, {});

  // Now setup each item (add ids, title) 
  Object.entries(groups).forEach(([ groupName, items ]) => {
    const groupIds = []; //  id in group
    let contentCount = 0;
    items.forEach(item => {
      const { context, commentRange, example } = item.data;
      const { name, line } = context;
      const lineCount = name.split("\n").length;
      const isContent = lineCount > 1 && line.start > commentRange.end + lineCount;
      // Find any content blocks and mark accordingly
      if (isContent) {
        context.type = "content";
        context.line = commentRange;
        context.name = `content-block-id-${ ++contentCount }`;
      }
      // Incase sassdoc changes it's structure passing set data to 
      // options callback, also passing the item's original data incase it's needed
      item.id = uniqueId(item.data, groupIds);
      item.uid = `${ groupName }-${ item.id }`;
      item.title = itemTitle(item.data);
      // Extract modifier from example description (ie @example html {preview} This is the description)
      if (example?.length) {
        example.forEach(ex => {
          if (ex?.description?.startsWith("{")) {
            let descMatches = regex.bracedPrefix.exec(ex.description);
            if (descMatches && descMatches[1].length) {
              ex.description = descMatches[2];
              ex.modifier = descMatches[1].replace(/[{}]/g, "");
            }
          }
        });
      }
    });
  });

  return { groups, info };
}

function uniqueId(data, all, count = 0) {
  const { type, name } = data.context;
  const suffix = count ? `-${ count }` : "";
  const id = `${ type }-${ name }${ suffix }`;
  if (all.includes(id)) {
    return uniqueId(data, all, ++count);
  } else {
    all.push(id);
    return id;
  }
}