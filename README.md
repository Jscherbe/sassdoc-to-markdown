# Sassdoc To Markdown

A flexible SCSS documentation tool that generates clean, customizable Markdown from your Sass stylesheets. It leverages SassDoc for data extraction and offers various configuration options to tailor the output to your specific needs.

- Compiled Sass examples (Dart Sass) 
- Preview (output) HTML examples
- Content blocks between documented items (ie. generic content not tied to a specific annotation)
- Compiled examples can be configured to use your own implementation, see options (ie. if using node-sass for example)
- Custom group display names by adding dash ie `/// @group util - Shared Utilities`
- Group descriptions pulled from lines after group definition (you can also use content blocks to describe groups)
- Ability to override all annotation and page templates and add your own


## Table of Contents

- [Examples](#examples)
  - [Example of Using this Library](#example-of-using-this-library)
  - [Compiled Sassdoc Example](#compiled-sassdoc-example)
  - [Preview HTML Example](#preview-html-example)
- [Configuration](#configuration)
- [Changes](#changes)

## Examples

### Example of Using this Library

```js
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import { outputPages } from "@ulu/sassdoc-to-markdown";

const __dirname = dirname(fileURLToPath(import.meta.url));

(async () => {
  await outputPages({
    dist: resolve(__dirname, "docs/"),
    dir: resolve(__dirname, "src/sass/"),
    pathBase: "/sass/"
  });
})();
```

### Compiled Sassdoc Example

```scss
/// In addition to the code block example this example will show the compiled result. Note the  {compile} modifier on the example. It also uses the compiler annotation to load the module for the compiled example. Content in the compiler annotation are prepended to the compiled code for the item or group if at file-level)
/// @compiler
///   @use "_this-file" as examples;
/// @example scss {compile} This example will be compiled
///   @include examples.print-color(red);

@mixin  print-color($value) {
  .test {
    color: $value;
  }
}
```

### Preview HTML Example

```scss
/// In addition to the html example this will also be previewed in an iframe. Note the {preview} modifier. Settings are available to add stylesheet and javascript to iframe. Iframe used for isolation from docs styles. 
/// @example html {preview} This example will be previewed
///   <span class="test">This is a test</span>

@mixin  some-mixin($value) {
  .test {
    color: red;
  }
}
```

## Configuration

The following options can be passed to configure this generator. Also you can see the full defaults at `/lib/defaults.js`.

| Name | Type | Default Value | Description |
|---|---|---|---|
| dist | string | "" | The directory to output documentation pages |
| dir | string | "" | The directory that sassdocs will parse and make pages from |
| debug | boolean | false | Plugin development flag (output logs, etc) |
| debugToDir | string | null | Print out plugin/sassdoc data (used for developing plugin) |
| pathBase | string | "/sass/" | Path to prefix to all paths generated for sassdocs |
| byType | boolean | true | Whether or not the documented items should be organized by type (variable, mixin, etc) or should display in the order they were parsed |
| sassdocOptions | object | { verbose: true } | Sassdoc library options |
| contentEnabled | boolean | true | Include comment blocks that are between sassdoc items |
| contentInline | boolean | true | Extra content should all be displayed above items (ie. variables, mixins, etc) even if it is in between documented items |
| previewEnabled | boolean | true | Output preview of html code from an example |
| previewTemplate | function | (code, ctx) => `<div>\n${ code }\n</div>` | Template to use for html previews |
| previewTitle | string | "Preview" | Title for preview |
| undefinedGroupName | string | "None" | Name for undefined groups |
| annotations | string[] | ["name", "description", ...] | Controls order and which annotations are printed |
| showSourceCode | string[] | ["placeholder", "css", ...] | The documentation types that should display source code |
| customAnnotations | string[] | [] | (empty) |
| pageTemplates | object | {} | (empty) |
| annotationTemplates | object | {} | (empty) |
| pageTitleFormatter | function | titleCase | Callback function used to format the page title (from the group name) |
| itemTitle | function | (data) => ... | Function to format item titles |
| compiler | function | compile | Set custom compiler for sass |
| compilerOptions | object | { additionalData: null, ... } | Options passed to sass for compiled sass examples |
| sort | function | (a,b) => ... | Callback used to sort (array method) the pages before adding to Vuepress |
| outputFiles | boolean | true | Can be used to disable output, ie. using build end to do something manually |
| outputTemplate | function | ({ frontmatter, content }) => ... | Template for markdown files |
| buildEnd | function | (data) => ... | Callback when page's have been generated/sorted before output |
| resolveLink | function | (item, options) => ... | Method to override how links to items are created |


## Changes

[Change Log](CHANGELOG.md)