import { table, headline } from "@ulu/markdown-output-utils";
export default ({ item, headlineLevel }) => {
  const { property } = item.data;
  if (property) {
    return `
${ headline("Map Properties", headlineLevel) }

${ table(property) }

    `;
  }
}