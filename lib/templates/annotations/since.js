import { list, headline } from "@ulu/markdown-output-utils";

export default ({ item, headlineLevel }) => {
  const { since } = item.data;
  if (since) {
    return `
${ headline("Since", headlineLevel) }

${ list(since, s => `\`${ s.version }\` - ${ s.description }`) }

    `;
  }
}