import fs from "fs-extra";
import path from "path";
import { fileURLToPath } from "url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));

let running = false;
import { outputPages } from "../../../index.js";
const options = {
  dist: path.resolve(__dirname, "../../"),
  dir: path.resolve(__dirname, "scss-tests"),
  pathBase: "/sass/"
}
const outputDir = path.join(options.dist, options.pathBase);

async function output() {
  if (!running) {
    running = true;
    cleanOutputDir();
    await outputPages(options);
    running = false;
  }
}

function cleanOutputDir() {
  const dir = fs.readdirSync(outputDir);
  dir.forEach(item => {
    const fullpath = path.join(outputDir, item);
    // Delete if directory (was created by sassdoc plugin)
    if (fs.lstatSync(fullpath).isDirectory()) {
      fs.removeSync(fullpath);
    }
  });
}

(async () => {
  try {
    await output();
  } catch (error) {
    console.log(error);
  }
})();