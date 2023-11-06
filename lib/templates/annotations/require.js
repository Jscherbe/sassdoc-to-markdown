import { list, link, code, headline } from "../../template-helpers.js";

export default ({ item, headlineLevel }) => {
  const { require: requires } = item.data;
  if (!requires || !requires.length) return;
  const added = [];
  const links = requires.map(req => {
    const { description, name } = req;
    const ref = req.item?.$item;
    let markup = ref ? link(ref) : code(name);
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