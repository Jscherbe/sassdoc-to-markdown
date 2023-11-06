import { codeBlock } from "../../template-helpers.js";
import stripIndent from "strip-indent";

export default ({ item, options }) => {
  const { type, code, value } = item.data.context;
  let raw = code || value;

  if (options.showSourceCode?.includes(type) && raw) {
    let sourceCode = `{
  ${ stripIndent(raw.trim()) }
}`;
    return codeBlock(sourceCode, "scss");
  }
};