<template>
  <details class="SassdocDetails" style="margin: 0.75em 0;">
    <summary v-if="summary" style="cursor: pointer;">
      {{ summary }}
    </summary>
    <div class="SassdocDetails__content">
      <slot/>
    </div>
  </details>
</template>

<script>
  export default {
    name: 'SassdocDetails',
    props: {
      summary: String
    }
  }
</script>

<style lang="css">
  /* .SassdocDetails { */
    /* font-size: 0.9em; */
    /* padding: 0.5em; */
    /* margin: 0.75em 0; */
    /* color: #414141; */
    /* border: 1px solid;
    border-color:  var(--c-border); */
    /* border: none; */
    /* background-color: #f6f6f6; */
    /* border-radius: 3px; */
  /* } */
  /* .SassdocDetails > summary {
    cursor: pointer;
  } */
  /* .SassdocDetails > summary:hover,
  .SassdocDetails > summary:hover::marker {
    color: black;
  }
  .SassdocDetails > summary::marker {
    color: #a8a8a8;
    font-size: 0.95em;
  } */
</style>