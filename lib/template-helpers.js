import { joinMarkup, titleCase } from "./utils.js";

function headline(text, level) {
  return `${ "#".repeat(level) } ${ text }`; 
}
function list(array, callback = i => i) {
  return array.map(item => `- ${ callback(item) }`).join("\n");
}
function titledList(items) {
  const entries = Object.entries(items).filter(([,value]) => value);
  return entries.map(([title, value]) => `- **${ title }:** ${ value }`).join("\n");
}
function link({ path, title }) {
  return`[${ title }](${ path })`;
}
function prefixedItemName(type, name) {
  const types = {
    "variable" : "$",
    "placeholder" : "%",
    "mixin" : "@mixin ",
    "function" : "@function "
  };
  return (types[type] || "") + name;
}
function propertyTableKeys(array) {
  const set = new Set();
  array.forEach(o => Object.keys(o).forEach(k => set.add(k)));
  const keys = Array.from(set);
  const toFront = text => {
    const index = keys.findIndex(i => i === text);
    if (index !== -1) {
      keys.splice(index, 1);
      keys.unshift(text);
    } 
  }
  toFront("type");
  toFront("name");
  return keys;
}
function cellFormatter(key, data) {
  return key === "type" ? `\`${ data }\`` : 
    data ? data.toString().trim() : "";
}
function propertyTable(array, options) {
  if (!array || !array.length) return;
  const opts = Object.assign({}, {
    keys: null,
    formatHeader: titleCase,
    formatCell: cellFormatter
  }, options);
  const joinRow = cols => `|${ cols.join("|") }|`;
  const keys = opts.keys || propertyTableKeys(array);
  const $header = [ joinRow(keys.map(opts.formatHeader)) ];
  const $divider = [ joinRow(keys.map(() => ":--")) ];
  const $rows = array.map(obj => 
    joinRow(keys.map(key => opts.formatCell(key, obj[key])))
  );
  return joinMarkup($header, $divider, $rows);
}

function code(markup) {
  return `\`${ markup }\``;
}
function codeBlock(markup, type) {
  return `
\`\`\` ${ type }
${ markup }
\`\`\`
  `;
}
function vuepressCodeBlock(markup, type, title) {
  return `
<CodeGroupItem title="${ title }">
${ codeBlock(markup, type, title) }
</CodeGroupItem>
  `;
}
function vuepressBadge(text, type = "tip", vertical = "top") {
  return `<Badge text="${ text }" type="${ type }" vertical="${ vertical }" />`;
}
function vuepressCodeGroup(markup) {
  return `
<CodeGroup>
${ markup }
</CodeGroup>
  `;
}
function preview(uid, index) {
  return  `
<SassdocPreview uid="${ uid }" :exampleIndex="${ index }" />
  `;
}

export {
  headline,
  list,
  titledList,
  link,
  code,
  codeBlock, 
  vuepressCodeBlock, 
  vuepressCodeGroup,
  prefixedItemName,
  propertyTable,
  vuepressBadge,
  preview
}