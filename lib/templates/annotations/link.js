import { headline } from "../../template-helpers.js";

export default ({ item, headlineLevel }) => {
  const { link } = item.data;
  if (link) {
    return `
${ headline("Related Links", headlineLevel) }

${ link.map(l => `- [${ l.caption || l.url }](${ l.url })`).join("\n") }

    `;
  }
}