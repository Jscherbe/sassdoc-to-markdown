import { list, headline } from "../../template-helpers.js";

export default ({ item, headlineLevel }) => {
  const { todo } = item.data;
  if (todo) {
    return `
${ headline("Todos", headlineLevel) }

${ list(todo) }
    `;
  }
}