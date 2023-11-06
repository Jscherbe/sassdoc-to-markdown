export default ({ item }) => {
  const { type } = item.data;
  if (type) {
    return `
**type:** \`${ type }\`
    `;
  }
}

