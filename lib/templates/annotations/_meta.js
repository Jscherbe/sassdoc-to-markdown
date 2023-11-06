import { titledList } from "../../template-helpers.js";

export default ({ item }) => {
  const { context, file, author, commentRange, aliased } = item.data;
  const { line, type } = context;
  if (type !== "content") {
    return `

<SassdocDetails summary="Meta Information">

${ titledList({
  "File" :                  file.path,
  "Group" :                 item.groupName,
  "Type" :                  type,
  "Aliased" :               aliased ? aliased.join(", ") : null,
  "Lines (comments)" :      commentRange ? `${ commentRange.start }-${ commentRange.end }` : null,
  "Lines (code)" :          line ? `${ line.start }-${ line.end }` : null,
  "Author" :                author
}) }

</SassdocDetails>
    
    `;
  }
}