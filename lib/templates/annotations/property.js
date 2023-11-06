import { propertyTable, headline } from "../../template-helpers.js";
export default ({ item, headlineLevel }) => {
  const { property } = item.data
  if (property) {
    return `
${ headline("Map Properties", headlineLevel) }

${ propertyTable(property) }

    `;
  }
}