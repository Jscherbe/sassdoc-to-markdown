import { escapeAttrLike } from "../../utils.js";

export default ({ item }) => {
  const { description } = item.data;
  if (description) {
    return `
${ escapeAttrLike(description) }    
    `;
  }
}