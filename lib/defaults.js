import { compile } from "./compile.js";
import { titleCase } from "./utils.js";
/**
 * Default Options
 */
export const defaults = {
  /**
   * The directory to the vuepress documentation
   */
  dist: "",
  /**
   * The directory that sassdocs will parse and make pages from
   */
  dir: "",
  /**
   * Plugin development flag (output logs, etc)
   */
  debug: false,
  /**
   * Print out plugin/sassdoc data (used for developing plugin)
   */
  debugToDir: null,
  /**
   * Path to prefix to all paths generated for sassdocs (folder with vuepress docs)
   * - Sassdoc plugin creates pages of items per group
   * - Example, if "/sass/" is set and an item(s) have a group of 'settings' a page is created at /sass/settings/
   */
  pathBase: "/sass/",
  /**
   * Whether or not the documented items should be organized by type (variable, mixin, etc) or should display in the order they were parsed
   */
  byType: true,
  /**
   * Sassdoc library options
   */
  sassdocOptions: { verbose: true },
  /**
   * Include comment blocks that are between sassdoc items. By default if an extra item is included 
   * before all items in the group it will appear at the top of the page, below the group page title 
   * and description (exteneded discriptions). Note: If using groups for modules you might use the 
   * Extra Content's to describe the module's interface/usage  at a top level.
   */
  contentEnabled: true,
  /**
   * Extra content should all be displayed above items (ie. variables, mixins, etc) even if 
   * it is in between documented items
   */
  contentInline: true,
  /**
   * Can be used to disable the required markdown plugins that this plugin uses
   * - Incase you have already installed theme, etc
   */
  addMarkdownAttrSupport: true,
  undefinedGroupName: "None",
  /**
   * What access types are printed
   */
  access: ["public"],
  /**
   * Controls order and which annotations are printed
   * - Could also be used for custom annotation (need to check on how user passed these to sassdoc)
   * - Would need to create a matching template name 
   * - Use a custom template by passing a template in the annotationTemplates with the same key/name
   * - Items starting with "_" custom (non-annotation) templates ie. "_meta", user can insert content this way
   */
  annotations: [
    "name",
    "description",
    "deprecated",
    "_code",
    "_meta",
    "property",
    "example",
    "parameter",
    "return",
    "output",
    "throw",
    "link",
    "since",
    "todo",
    "see",
    "require"
  ],
  /**
   * The documentation types that should display source code
   * - ie. mixin, variable, placeholder, function, css
   */
  showSourceCode: [
    "placeholder",
    "css"
  ],
  customAnnotations: [],
  /**
   * Provide custom markdown templates for things like the page, item, etc
   */
  pageTemplates: {},
  /**
   * Provide custom markdown templates for the annotations of a documented item
   * - The item's object (all annotations) as an argument
   * - Sassdoc raw data is in property "data" of the item's object
   * - Example Template: `({ item, groupName, options }) => item.data.description`
   */
  annotationTemplates: {},
  /**
   * Callback function used to format the page title (from the group name)
   * @param {String} name Group's name or display name
   */
  pageTitleFormatter: titleCase,
  itemTitle(data) {
    const { name, type } = data.context;
    const suffix = type === "function" ||  type === "mixin" ? "()" : "";
    const prefix = type === "variable" ? "$" 
                 : type === "placeholder" ? "%" : "";
    return prefix + name + suffix;
  },
  /**
   * Options passed to sass for compiled sass examples
   */
  compilerOptions: {
    additionalData: null,
    sassOptions: {},
    debugToFile: false
  },
  compiler: compile,
  /**
   * Additional data to prepend to sass example
   */
  compiledAdditionalData: null,
  /**
   * Enable iframe previews of item's (ie. mixin) that have examples of the "html" type (default see previewExampleTypes to set custom types (ie. such as "html"))
   * - Used in order to see the markup in action (ie. applied to stylesheet)
   * - See 'previewMeta'
   */
  previewEnabled: true,
  /**
   * Styles applied to the iframe element
   */
  previewStyles: `
    height:100%; 
    width:100%; 
    border: 1px solid #e6e6ea; 
    border-radius: 6px;
    padding: 0.5rem; margin: 1rem 0;
  `,
  /**
   * Meta/Head of the iframe that is generated to display the example
   * - Use this to link stylesheet/scripts etc
   */
  previewMeta: `
    <title>Sassdoc Example</title> 
    <meta charset="utf-8"> 
    <meta name="viewport" content="width=device-width, initial-scale=1"> 
    <link rel="stylesheet" href="/sassdoc-preview.css">
  `,
  previewBodyScripts: `
    <script src="/sassdoc-preview.js"></script>
  `,
  /**
   * Callback used to sort (array method) the pages before adding to Vuepress
   * - You can access 'title' and 'sassdocGroupName' from the page.frontmatter property
   * - This is passed (page, anotherPage) to be compared by Array.prototype.sort
   */
  sort(a,b) {
    return '' + a.frontmatter.title.localeCompare('' + b.frontmatter.title)
  },
  /**
   * Callback when page's have been generated/sorted before adding to Vuepress
   * - Could be used to modify page object
   * - Could be used to remove pages
   * - Could be used to do something with page data
   */
  onReady(pages) {
    // Change the page
  }
}