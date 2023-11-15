import { PLUGIN_NAME } from './constants.js';
import * as sass from 'sass'
/**
 * Used to compile a documented item's scss if it is marked to compile
 * - Dart Sass implementation
 * @param {String} code User code content from the comment
 * @param {String} options Current options
 * @param {String} additionalData Additional data for sass, prepended things from code in `@compiler` for example
 * @todo not 
 */
export function compile(code, options, additionalData = "") {
  const { compilerOptions, dir } = options;
  const opts = Object.assign({ 
    style: "expanded",
    loadPaths: [ dir ]
  }, compilerOptions.sassOptions);

  // File template for sass
  const src = `
${ compilerOptions.additionalData || "" }
${ additionalData }
${ code }
  `;

  try {
    let result = sass.compileString(src, opts);
    return result.css;
  } catch (error) {
    console.error(PLUGIN_NAME, "Error while compiling scss example:\n", error);
    console.error(PLUGIN_NAME, "Code that triggered the above error:\n", code);
  }
}
