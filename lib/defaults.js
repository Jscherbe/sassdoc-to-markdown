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
   * When outputting by type, adjust this array to change the section order. Section 
   * types not in array will be omitted from output.
   */
  byTypeOrder: [
    "body",
    "variables",
    "mixins",
    "functions",
    "placeholders",
    "CSS"
  ],
  /**
   * Sassdoc library options
   */
  sassdocOptions: { verbose: true },
  /**
   * Include comment blocks that are between sassdoc items. By default if an extra item is included 
   * before all items in the group it will appear at the top of the page, below the group page title 
   * and description (extended descriptions). 
   * 
   * If using groups for modules you might use the extra content's to describe the module's interface/usage  
   * at a top level. 
   * 
   * Note: If you have the items sorted by type the extra content needs to be between the items (when contentInline enabled)
   * Limitations: Does not work at the end of document (can't be last documented item)
   */
  contentEnabled: true,
  /**
   * Extra content should all be displayed above items (ie. variables, mixins, etc) even if 
   * it is in between documented items
   */
  contentInline: true,
  /**
   * Output preview of html code from an example 
   * - Mark the example like `/// @example html {preview}`
   * - In some cases you may want to handle this yourself (custom annotation, custom example annotation template)
   *   - For this simple markdown library the preview is simply a div (class of sassdoc-preview) around the example code
   */
  previewEnabled: true,
  /**
   * Template to use for html previews
   * - Passed example code and ctx (if needed)
   */
  previewTemplate: (code, ctx) => `<div>\n${ code }\n</div>`,
  /**
   * Title for preview 
   */
  previewTitle: "Preview",
  /**
   * Name for undefined groups
   */
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
  /**
   * Provide annotation functions (see sassdoc docs for modifying or introducing your own annotations). 
   * - If you make your own provide a template for output in `annotationTemplates`
   */
  customAnnotations: [],
  /**
   * Provides an object of markdown template functions for any of the page level templates provided by this library (ie. group, section, item). See `/lib/templates/page/` for examples.
   */
  pageTemplates: {},
  /**
   * Provides an object of markdown template functions for native sassdoc annotations, custom annotations provided by this library or your own custom annotations. See `/lib/templates/annotations/` for examples.
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
  /**
   * Provide a custom function to set the title for an item
   */
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
  },
  /**
   * Whether or not to show items that are flagged with `@access private`
   * - Will also hide the printout of access in template since all will be public
   */
  hidePrivate: false,
  /**
   * If hiding private, and a private item is the only member of a group this setting will determine if the group is still created
   * - Edge case, using this to print empty groups (provide info about stylesheets/group which doesn't have items [for example if the module just calls a mixin])
   */
  hidePrivateKeepGroup: false,
}