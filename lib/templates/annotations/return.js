import { table, headline } from "@ulu/markdown-output-utils";
export default ({ item, headlineLevel }) => {
  if (item.data.return) {
    return `
${ headline("Returns", headlineLevel) }

${ table([ item.data.return ]) }

    `;
  }
}