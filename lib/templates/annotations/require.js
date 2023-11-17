import { list, code, headline } from "@ulu/markdown-output-utils";
import { itemLink } from "../../utils.js" ;

export default ({ item, headlineLevel, options }) => {
  const { require: requires } = item.data;
  if (!requires || !requires.length) return;
  const added = [];
  const links = requires.map(req => {
    const { description, name } = req;
    let markup = req.item?.$item ? itemLink(req.item, options) : code(name);
    if (description) {
      markup += ` - ${ description }`;
    }
    if (added.includes(markup)) {
      return;
    } else {
      added.push(markup);
      return markup;
    }
  }).filter(markup => markup);
  return `
${ headline("Require", headlineLevel) }

${ list(links) }
  `;
}