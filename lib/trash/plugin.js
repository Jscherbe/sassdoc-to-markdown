import { defaults } from './defaults.js';
import path from 'path';
import markdownItAttrs from 'markdown-it-attrs';
import { PLUGIN_NAME } from './constants.js';

export const plugin = (userOptions) => {
  const options = Object.assign({}, defaults, userOptions);

  return {
    name: PLUGIN_NAME,
    multiple: true,
    clientConfigFile: path.resolve(__dirname, "assets/client-config.js"),
    onPrepared(app) {
      const tempFile = `
        export const previewMeta = \`${ options.previewMeta }\`;
        export const previewStyles = \`${ options.previewStyles }\`;
        export const previewBodyScripts = \`${ options.previewBodyScripts }\`;
      `;
      app.writeTemp('sassdoc-options.js', tempFile);
    },
    extendsMarkdown(md) {
      if (options.addMarkdownAttrSupport) {
        md.use(markdownItAttrs)
      }
    },
    extendPage($page) {
      const { headers, frontmatter } = $page;
      // Need to fix markdown-it-attrs being included in these headers
      // ie. mixin-name {#mixin-name} 
      // Tried to rearrange the markdown plugins (no luck)
      // Editing manually becuase it's the only workaround I've found
      if (frontmatter.sassdocGroupName && options.addMarkdownAttrSupport && headers) {
        $page.headers.forEach(header => {
          header.title = header.title.replace(/{#[^\n ]*}/g, "");
        });
      }
    },
    // async onInitialized(app) {
      // const parseData = await parse(options);
      // if (!parseData) return [];

      // const { groups, info } = parseData;

      // if (options.debug) {
      //   console.time("sassdoc:plugin");
      // }
      // if (options.debugToDir) {
      //   dataToFile(path.join(options.debugToDir, "sassdoc-plugin-data.json"), groups);
      // }
      // const pages = createPages({ groups, info, options });
      // console.log(Object.keys(pages[0].frontmatter));
      // if (options.onReady) {
      //   await options.onReady({ pages, groups, options, info });
      // }
      // for (const page of pages) {
      //   app.pages.push(await createPage(app, page));
      // }
      // if (options.debug) {
      //   console.timeEnd("sassdoc:plugin");
      // }
    // }
  }
}