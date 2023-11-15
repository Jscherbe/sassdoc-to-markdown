import { dataToFile } from './utils.js';
import { defaults } from './defaults.js';
import { parse } from './parse.js';
import { createPages } from './create-pages.js';
import fs from 'fs-extra';
import path from 'path';

export async function outputPages(userOptions) {
  const options = Object.assign({}, defaults, userOptions);
  const parseData = await parse(options);

  if (!parseData) {
    console.warn("Sassdoc Plugin: No data from sassdoc");
  }
  // console.log(options.dist);
  if (!fs.existsSync(options.dist)) {
    console.warn("Sassdoc Plugin: Docs directory not found");
  }

  const { groups, info } = parseData;

  if (options.debug) {
    console.time("sassdoc:plugin");
  }
  if (options.debugToDir) {
    dataToFile(path.join(options.debugToDir, "sassdoc-plugin-data.json"), groups);
  }
  const pages = createPages({ groups, info, options });

  if (options.buildEnd) {
    await options.buildEnd({ pages, groups, options, info });
  }
  if (options.outputFiles) {
    for (const page of pages) {
      let filepath = path.join(options.dist, page.path, "index.md");
      let content = options.outputTemplate(page);
      fs.outputFileSync(filepath, content);
    }
  }

  if (options.debug) {
    console.timeEnd("sassdoc:plugin");
  }
}