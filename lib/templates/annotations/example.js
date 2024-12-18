import { joinMarkup, codeBlock, headline } from "@ulu/markdown-output-utils";

export default (ctx) => {
  const { item, options, headlineLevel } = ctx;
  const { example, compiler: compilerPrepends } = item.data;
  if (example) {
    const $examples = example.map(({ 
      type, 
      description, 
      code, 
      modifier 
    }) => {
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
          codeBlock(code, type),
          codeBlock(compiled, "css", "CSS")
        ];
        exampleMarkup = joinMarkup($groupBlocks);
      } else {
        exampleMarkup = codeBlock(code, type);
      }
      return `
${ description ? description : "" }      

${ exampleMarkup }

${ hasPreview ? previewBlock(code) : "" }

      `;
    });
    return joinMarkup(headline("Examples", headlineLevel), $examples);
  }

  function previewBlock(code) {
    return `
${ headline(options.previewTitle, headlineLevel + 1) }

${ options.previewTemplate(code, ctx) }

    `;
  }
} 


