import { titleCase } from "../../utils.js";

export default ({ sectionName }, markup) => {
  return `
${ sectionName !== "body" ? `## ${ titleCase(sectionName) }` : "" }

${ markup }
  `;
}
