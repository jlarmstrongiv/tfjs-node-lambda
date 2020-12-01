// env vars for tensorflow/node version
// sort package json
// https://codeburst.io/execa-v2-20ffafeedfdf

import fs from 'fs-extra';
import path from 'path';
import zlib from 'zlib';
import tar from 'tar';
import pump from 'pump';

export default async function compress(binary): Promise<void> {
  const TFJS_PATH = path.join(process.cwd(), 'tfjs-node-lambda-releases');
  const TFJS_FILE_PATH = path.join(process.cwd(), binary);

  return new Promise((resolve, reject) => {
    pump(
      tar.c({ cwd: TFJS_PATH }, ['index.js', 'node_modules']),
      zlib.createBrotliCompress({
        // https://nodejs.org/api/zlib.html#zlib_class_brotlioptions
        params: {
          [zlib.constants.BROTLI_PARAM_QUALITY]:
            // https://nodejs.org/api/zlib.html#zlib_compressor_options
            zlib.constants.BROTLI_MAX_QUALITY,
        },
      }),
      fs.createWriteStream(TFJS_FILE_PATH),
      (error) => {
        if (error) reject(error);
        resolve();
      },
    );
  });
}
