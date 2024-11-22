import { headline, titleCase } from "@ulu/markdown-output-utils";

export default ({ item, headlineLevel, options }) => {
  const { id, title } = item;
  const { context, access, type: variableType } = item.data;
  // If hiding access private items we don't need to show public
  const showAccessLabel = !options.hideAccessPrivate;
  const { type } = context;
  const label = (title, txt) => `${ title }: ${txt}`;
  // content blocks don't get a name/title
  if (type === "content") {
    return;
  }
  const labels = [ titleCase(type) ];
  if (showAccessLabel) {
    labels.push(label("Access", titleCase(access)));
  }
  if (variableType) {
    labels.push(label("Type", variableType));
  }
  return `
${ headline("", headlineLevel - 1) } ${ title } {#${ id }} 

<small>${ labels.join("&ensp;|&ensp;") }</small>

  `;
}