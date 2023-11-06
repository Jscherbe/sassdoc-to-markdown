import { headline } from "../../template-helpers.js";

export default ({ item, headlineLevel }) => {
  const { output } = item.data;
  if (output) {
    return `
${ headline("Mixin Output", headlineLevel) }

${ output }

    `
  }
}