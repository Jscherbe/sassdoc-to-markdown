export default ({ item }) => {
  const { description } = item.data;
  if (description) {
    return `
${ description }    
    `;
  }
}