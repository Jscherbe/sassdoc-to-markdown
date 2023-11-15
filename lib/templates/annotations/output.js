import { headline } from "@ulu/markdown-output-utils";

export default ({ item, headlineLevel }) => {
  const { output } = item.data;
  if (output) {
    return `
${ headline("Mixin Output", headlineLevel) }

${ output }

    `
  }
}