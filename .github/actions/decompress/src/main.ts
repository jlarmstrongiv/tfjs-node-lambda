import decompressZips from './decompressZips';
import deleteZips from './deleteZips';
import fg from 'fast-glob';
import path from 'path';
import * as core from '@actions/core';

export default async function main() {
  await decompressZips();
  await deleteZips();
  const newPaths = await fg([path.join(process.cwd(), '**/*.br')]);
  core.info(`newPaths: ${JSON.stringify(newPaths)}`);
}

if (process.env.NODE_ENV === 'development') {
  console.log('NODE_ENV', process.env.NODE_ENV);
  main();
}
