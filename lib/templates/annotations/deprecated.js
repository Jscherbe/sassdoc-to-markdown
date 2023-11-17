import { headline } from "@ulu/markdown-output-utils";
export default ({ item, headlineLevel }) => {
  const { deprecated: message } = item.data;
  if (message) {
    return `
${ headline("Deprecated", headlineLevel) }

${ message }
    `;
  }
}