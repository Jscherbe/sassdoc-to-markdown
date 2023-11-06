
import { propertyTable, headline } from "../../template-helpers.js";
const config = {
  formatCell: (header, data) => {
    return header === "type" ? `\`${ data }\`` :
           header === "name" && data !== "@content" ? `$${ data }` : 
           data ? data.toString().trim() : "";
  }
}
export default ({ item, headlineLevel }) => {
  const { parameter, content } = item.data;
  if (parameter) {
    const rows = [ ...parameter ];
    if (content) {
      rows.push({
        name: "@content",
        type: "content block",
        description: content
      });
    }
    return `
${ headline("Parameters", headlineLevel) }

${ propertyTable(rows, config) }

    `;
  }
}
