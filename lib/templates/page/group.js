export default ({ title, info, groupName, options }, markup) => {
  const groupDescription = info?.groupDescriptions?.[groupName];
  let description = !groupDescription ? "" : `
<div class="sassdoc-intro">
  
${ groupDescription }
  
</div>
    `;

  return `
# ${ title }

${ description }

${ markup }
  `;
}
