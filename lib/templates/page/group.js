export default ({ title, info, groupName }, markup) => {
  const groupDescription = info?.groupDescriptions?.[groupName];
  return `
# ${ title }

${ groupDescription ? groupDescription : "" }

${ markup }
  `;
}
