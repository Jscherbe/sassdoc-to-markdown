import { codeBlock } from "@ulu/markdown-output-utils";
import stripIndent from "strip-indent";

export default ({ item, options }) => {
  const { type, code, value, name } = item.data.context;
  let raw = code || value;

  if (options.showSourceCode?.includes(type) && raw) {
    
    let sourceCode = stripIndent(raw.trim());
    if (["css", "placeholder"].includes(type)) {
      sourceCode = `{\n  ${ sourceCode }\n }`;
    }
    if (type === "variable") {
      sourceCode = `$${ name }: ${ sourceCode };`;
    }
    
    return codeBlock(sourceCode, "scss");
  }
};