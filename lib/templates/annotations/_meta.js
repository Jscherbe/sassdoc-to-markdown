import { titledList } from "@ulu/markdown-output-utils";
import { headline } from "@ulu/markdown-output-utils";

export default ({ item, headlineLevel }) => {
  const { context, file, author, commentRange, aliased } = item.data;
  const { line, type } = context;
  if (type !== "content") {
    return `
${ headline("Details", headlineLevel) }

${ titledList({
  "File" :                  file.path,
  "Group" :                 item.groupName,
  "Type" :                  type,
  "Aliased" :               aliased ? aliased.join(", ") : null,
  "Lines (comments)" :      commentRange ? `${ commentRange.start }-${ commentRange.end }` : null,
  "Lines (code)" :          line ? `${ line.start }-${ line.end }` : null,
  "Author" :                author
}) }
    
    `;
  }
}