import fs from 'fs';
import { link } from "@ulu/markdown-output-utils";

/**
 * Escape text that may contain characters that are recognized markdown-it-attrs and shouldn't be, this adds escape charater
 * - Use as needed so far only seen in throw for sass interpolation
 * - "like 'lorem ipsum #{ $someVariable }"
 * @param {String} text String to escape
 * @returns {String} Escaped string
 */
export function escapeAttrLike(text) {
  return text.replace(/{.+}$/gm, "\\$&");
}

function circularReplacer() {
  const seen = new WeakSet()
  return (_, value) => {
    if (typeof value === "object" && value !== null) {
      if (seen.has(value)) {
        return
      }
      seen.add(value)
    }
    return value
  }
}
function dataToFile(to, data) {
  const content = typeof data === "string" ? data : JSON.stringify(data, circularReplacer(), 2);
  fs.writeFileSync(to, content);
}
function itemLink(item, options) {
  const { resolveLink } = options;
  const url = resolveLink(item.$item, options);
  return url ? link(item.$item.title, url) : item.$item.title;
}
const regex = {
  splitDash: /([^\s]+)\s*(?:-?\s*(.*))/,
  bracedPrefix: /({[^\s]+})?\s*(?:-?\s*(.*))/,
  trimNewLines: /^\s+|\s+$/g,
};

export { 
  dataToFile,
  regex,
  itemLink,
}