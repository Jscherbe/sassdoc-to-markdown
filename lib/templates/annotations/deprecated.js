export default ({ item }) => {
  const { deprecated } = item.data;
  if (deprecated) {
    return `
::: warning Deprecated
${ deprecated }
:::
    `;
  }
}