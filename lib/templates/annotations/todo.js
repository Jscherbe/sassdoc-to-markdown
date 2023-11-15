import { list, headline } from "@ulu/markdown-output-utils";

export default ({ item, headlineLevel }) => {
  const { todo } = item.data;
  if (todo) {
    return `
${ headline("Todos", headlineLevel) }

${ list(todo) }
    `;
  }
}