import { list, headline } from "@ulu/markdown-output-utils";
export default ({ item, headlineLevel }) => {
  if (item.data.throw) {
    return `
${ headline("Throw", headlineLevel) }

${ list(item.data.throw) }
    `;
  }
}