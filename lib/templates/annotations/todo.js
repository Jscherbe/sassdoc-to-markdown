import { list, headline } from "@ulu/markdown-output-utils";
import { escapeAttrLike } from "../../utils.js";

export default ({ item, headlineLevel }) => {
  const { todo } = item.data;
  if (todo) {
    return `
${ headline("Todos", headlineLevel) }

${ list(todo.map(t => escapeAttrLike(t))) }
    `;
  }
}