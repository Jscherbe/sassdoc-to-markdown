<template>
  <div class="SassdocPreview"></div>
</template>

<script>
  import { previewStyles, previewMeta, previewBodyScripts } from '@temp/sassdoc-options.js';
  export default {
    name: 'SassdocPreview',
    inject: ["getSassdocItem"],
    props: {
      uid: {
        type: String,
        required: true
      },
      exampleIndex: {
        type: [Number, String],
        required: true
      }
    },
    data() {
      return {
        iframe: null
      };
    },
    methods: {
      previewHtml(markup) {
        return `<html lang="en"><head>${ previewMeta }</head><body>${ markup }${ previewBodyScripts }</body></html>`;
      },
      createPreview() {
        const iframe = document.createElement('iframe');
        this.$el.appendChild(iframe);
        const doc = iframe.contentWindow.document;
        const markup = this.getSassdocItem(this.uid).previewsByIndex[this.exampleIndex];
        iframe.setAttribute("style", previewStyles);
        doc.open();
        doc.write(this.previewHtml(markup)); 
        doc.close();
        this.iframe = iframe;
      }
    },
    mounted() {
      if (!this.$isServer) {
        this.createPreview();
      }
    },
    destroy() {
      if (this.iframe) {
        this.$el.removeChild(this.iframe);
      }
    }
  }
</script>