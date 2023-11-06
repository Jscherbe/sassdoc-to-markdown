import { defineClientConfig } from "@vuepress/client";
import SassdocPreview from "./components/SassdocPreview.vue";
import SassdocDetails from "./components/SassdocDetails.vue";

import "./styles.scss";

export default defineClientConfig({
  enhance({ app }) {
    app.component("SassdocPreview", SassdocPreview)
    app.component("SassdocDetails", SassdocDetails)
  },
});