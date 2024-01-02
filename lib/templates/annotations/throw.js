import { list, headline } from "@ulu/markdown-output-utils";
import { escapeAttrLike } from "../../utils.js";

export default ({ item, headlineLevel }) => {
  if (item.data.throw) {
    return `
${ headline("Throw", headlineLevel) }

${ list(item.data.throw.map(t => escapeAttrLike(t))) }
    `;
  }
}