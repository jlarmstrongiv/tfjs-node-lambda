import fg from 'fast-glob';
import path from 'path';
import fs from 'fs-extra';
import * as core from '@actions/core';

export default async function main() {
  const releases = await fg([path.join(process.cwd(), '**/*.br')]);
  core.info(`releases: ${releases}`);
  for (const release of releases) {
    const parentFolder = path.basename(path.dirname(release));
    const fileName = path.basename(release);
    const fileData = await fs.readFile(release);
    await fs.remove(parentFolder);
    await fs.writeFile(path.join(process.cwd(), fileName), fileData);
  }
}

if (process.env.NODE_ENV === 'development') {
  console.log('NODE_ENV', process.env.NODE_ENV);
  main();
}
