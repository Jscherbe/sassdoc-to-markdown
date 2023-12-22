# Sassdoc To Markdown

Converts sass files using sassdoc syntax to markdown files, see 'lib/defaults.js' for settings.

- Compiled Sass examples (Dart Sass) 
- Compiled examples can be configured to use your own implementation, see options (ie. if using node-sass for example)
- Content blocks between documented items
- Custom group display names by adding dash ie `/// @group util - Shared Utilities`
- Group descriptions pulled from lines after group definition (you can also use content blocks to describe groups)
- Ability to override annotation and page templates

### Example Usage

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

## Compiled Sassdoc Example

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


## Changes

[Change Log](CHANGELOG.md)