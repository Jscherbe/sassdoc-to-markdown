import { list, headline } from "../../template-helpers.js";

export default ({ item, headlineLevel }) => {
  const { since } = item.data;
  if (since) {
    return `
${ headline("Since", headlineLevel) }

${ list(since, s => `\`${ s.version }\` - ${ s.description }`) }

    `;
  }
}