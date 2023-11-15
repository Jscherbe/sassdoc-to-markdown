import fs from 'fs'

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
const regex = {
  splitDash: /([^\s]+)\s*(?:-?\s*(.*))/,
  bracedPrefix: /({[^\s]+})?\s*(?:-?\s*(.*))/,
  trimNewLines: /^\s+|\s+$/g,
};

export { 
  dataToFile,
  regex
}