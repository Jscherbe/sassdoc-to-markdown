import { list, headline } from "../../template-helpers.js";
export default ({ item, headlineLevel }) => {
  if (item.data.throw) {
    return `
${ headline("Throw", headlineLevel) }

${ list(item.data.throw) }
    `;
  }
}