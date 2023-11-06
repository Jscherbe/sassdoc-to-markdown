import { propertyTable, headline } from "../../template-helpers.js";
export default ({ item, headlineLevel }) => {
  if (item.data.return) {
    return `
${ headline("Returns", headlineLevel) }

${ propertyTable([ item.data.return ]) }

    `;
  }
}