import path from 'path';
import fs from 'fs-extra';
import fg from 'fast-glob';
import yauzl from 'yauzl';
import pump from 'pump';
import * as core from '@actions/core';

export default async function decompressZips() {
  const zipPaths = await fg([
    path.join(process.cwd(), 'tfjs-node-lambda-releases', '*.zip'),
  ]);
  core.info(`zipPaths: ${JSON.stringify(zipPaths)}`);
  for (const zipPath of zipPaths) {
    await decompressZip(zipPath);
  }
}

async function decompressZip(zipPath: string): Promise<void> {
  return new Promise((resolve, reject) => {
    yauzl.open(zipPath, { lazyEntries: true }, function (err, zipFile) {
      if (err) throw err;
      zipFile.readEntry();
      zipFile.on('entry', function (entry) {
        if (/\/$/.test(entry.fileName)) {
          // Directory file names end with '/'.
          // Note that entires for directories themselves are optional.
          // An entry's fileName implicitly requires its parent directories to exist.
          zipFile.readEntry();
        } else {
          // file entry
          zipFile.openReadStream(entry, function (err, readStream) {
            if (err) throw err;
            readStream.on('end', function () {
              zipFile.readEntry();
            });
            core.info(`entry.fileName: ${entry.fileName}`);
            const filePath = path.join(
              process.cwd(),
              'tfjs-node-lambda-releases',
              entry.fileName,
            );
            core.info(`filePath: ${filePath}`);
            const writeStream = fs.createWriteStream(filePath);
            pump(readStream, writeStream, (error) => {
              if (error) throw reject(error);
              resolve();
            });
          });
        }
      });
    });
  });
}