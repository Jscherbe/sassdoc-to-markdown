import yaml from 'yaml';
import { compile } from "./compile.js";
import { titleCase } from "@ulu/markdown-output-utils";
/**
 * Default Options
 */
export const defaults = {
  /**
   * The directory to output documentation pages
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
   * Path to prefix to all paths generated for sassdocs
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
  undefinedGroupName: "None",
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
    "css",
    "variable"
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
   * Set custom compiler for sass 
   * - Should be a function that accepts (code, options, compilerPrepends)
   *   which should then be passed to SASS implementation
   */
  compiler: compile,
  /**
   * Options passed to sass for compiled sass examples
   */
  compilerOptions: {
    additionalData: null,
    sassOptions: {},
    debugToFile: false
  },
  /**
   * Callback used to sort (array method) the pages before adding to Vuepress
   * - You can access 'title' and 'sassdocGroupName' from the page.frontmatter property
   * - This is passed (page, anotherPage) to be compared by Array.prototype.sort
   */
  sort(a,b) {
    return '' + a.frontmatter.title.localeCompare('' + b.frontmatter.title)
  },
  /**
   * Can be used to disable output, ie. using build end to do something manually
   */
  outputFiles: true,
  /**
   * Template for markdown files
   */
  outputTemplate({ frontmatter, content }) {
    return `---\n${ yaml.stringify(frontmatter) }---\n\n${ content }`;
  },
  /**
   * Callback when page's have been generated/sorted before output
   * - Could be used to remove pages
   * - Could be used to do something with manually with page data
   * @param {*} data All buildtime data { pages, groups, etc... } 
   */
  buildEnd(data) {
    // Change the page
  },
  /**
   * Method to override how links to items are created
   * @param {*} item Item data 
   * @param {*} options Resolved configuration
   * @returns {String} URL to item
   */
  resolveLink(item, options) {
    return item.path;
  }
}