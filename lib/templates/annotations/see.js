import { list, headline } from "@ulu/markdown-output-utils";
import { itemLink } from "../../utils.js" ;

export default ({ item, headlineLevel, options }) => {
  const { see } = item.data;
  if (!see || !see.length) return;
  const links = see.map(item => itemLink(item, options));
  return `
${ headline("See", headlineLevel) }

${ list(links) }
  `;
}