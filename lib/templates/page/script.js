export default (_, data) => {
  return `
<script>
const sassdocGroup = ${ JSON.stringify(data) };
export default {
  sassdocGroup,
  provide: {
    getSassdocItem(uid) {
      return sassdocGroup.find(item => item.uid === uid);
    },
    getSassdocGroup() {
      return sassdocGroup;
    }
  }
}
</script> 
  `;
}