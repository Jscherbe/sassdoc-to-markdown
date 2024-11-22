import sassdoc from 'sassdoc'
import { annotations } from './annotations/index.js'
import { regex } from './utils.js'
import { PLUGIN_NAME } from './constants.js'

export async function parse(options) {
  const { 
    itemTitle,
    sassdocOptions, 
    dir,
    customAnnotations,
    hidePrivate,
    hidePrivateKeepGroup,
  } = options;
  let sassdocItems;
  const theme = () => {}; // Blank theme is used to add annotations
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
    const isHiddenPrivate = hidePrivate && data.access === "private";

    // By default the group won't be created for private items
    if (isHiddenPrivate && !hidePrivateKeepGroup) {
      return all;
    }

    // Create group
    const groupName = data.group[0];
    if (!all[groupName]) all[groupName] = [];

    // If this was private and group was allowed to be created
    // - return and don't add the item
    if (isHiddenPrivate) {
      return all;
    }
    // Create item with references both ways
    const $item = { data, groupName };
    data.$item = $item;
    all[groupName].push($item);

    return all;
  }, {});

  // Now setup each item (add ids, title) 
  Object.entries(groups).forEach(([ groupName, items ]) => {
    const groupIds = []; //  id in group
    let contentCount = 0;

    items.forEach((item, index) => {
      const { context, commentRange, example } = item.data;
      const next = item[index + 1];

      // Find any content blocks and mark accordingly
      if (checkTypeContent(item, next)) {
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

/**
 * Determines if item is just a content block (not referencing code)
 * - By checking line endings of it and the next item if there is one
 */
function checkTypeContent(item, next) {
  const { context, commentRange } = item.data;
  const { name } = context;
  const isWithinNext = next ? commentRange.end >= next.data.commentRange.start : false;
  const nameIsComment = name ? name.startsWith("/// ") : false;
  return isWithinNext || nameIsComment || !name;
}