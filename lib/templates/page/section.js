import { titleCase } from "@ulu/markdown-output-utils";

export default ({ sectionName }, markup) => {
  return `
${ sectionName !== "body" ? `## ${ titleCase(sectionName) }` : "" }

${ markup }
  `;
}
