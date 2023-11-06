import { vuepressBadge, headline } from "../../template-helpers.js";

export default ({ item, headlineLevel }) => {
  const { id, title } = item;
  const { context, access, type: variableType } = item.data;
  const { type } = context;
  // content blocks don't get a name/title
  if (type === "content") {
    return;
  }
  // const prefix = type === "variable" ? "$" : type === "placeholder" ? "%" : "";
  // const suffix = ["mixin", "function"].includes(type) ? "()" : "";
  const badges = [ vuepressBadge(type) ];
  // Add variable type
  if (variableType) {
    badges.push(vuepressBadge(variableType, "warning"))
  }
  if (access === "private") {
    badges.push(vuepressBadge("Private", "danger"));
  }
  return `
${ headline("", headlineLevel - 1) } ${ title } ${ badges.join("") }  {#${ id }} 

  `;
}