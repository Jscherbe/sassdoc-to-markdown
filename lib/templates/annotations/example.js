import { joinMarkup } from "../../utils.js";
import { codeBlock, preview, headline, vuepressCodeBlock, vuepressCodeGroup } from "../../template-helpers.js";

export default ({ item, options, headlineLevel }) => {
  const { uid } = item;
  const { example, compiler: compilerPrepends } = item.data;
  if (example) {
    const $examples = example.map(({ 
      type, 
      description, 
      code, 
      modifier 
    }, index) => {
      const hasCompiled = modifier === "compile" && ["scss", "sass"].includes(type);
      const hasPreview = modifier === "preview" && type === "html";
      let compiled, exampleMarkup;
      if (hasCompiled)  {
        compiled = options.compiler(code, options, compilerPrepends || "");
      }
      // If compilation fails or not compiled create normal code block
      // Else create code group with tabs for scss and the resulting CSS
      if (compiled) {
        let $groupBlocks = [ 
          vuepressCodeBlock(code, type, type.toUpperCase()),
          vuepressCodeBlock(compiled, "css", "CSS")
        ];
        exampleMarkup = vuepressCodeGroup(joinMarkup($groupBlocks));
      } else {
        exampleMarkup = codeBlock(code, type);
      }
      return `
${ description ? description : "" }      

${ exampleMarkup }

${ hasPreview ? previewBlock(uid, index, headlineLevel + 1) : "" }

      `;
    });
    return joinMarkup(headline("Examples", headlineLevel), $examples);
  }
  
} 

function previewBlock(uid, index, headlineLevel) {
  return `
${ headline("Preview", headlineLevel) }

${ preview(uid, index) }

  `;
}
