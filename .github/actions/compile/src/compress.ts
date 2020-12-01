// env vars for tensorflow/node version
// sort package json
// https://codeburst.io/execa-v2-20ffafeedfdf

import fs from 'fs-extra';
import path from 'path';
import zlib from 'zlib';
import tar from 'tar';
import * as core from '@actions/core';

export default async function compress(binary) {
  const TFJS_PATH = path.join(process.cwd(), 'tfjs-node-lambda-releases');
  const TFJS_FILE_PATH = path.join(process.cwd(), binary);
  core.info('start compiling');
  core.info(`TFJS_PATH ${TFJS_PATH}`);
  core.info(`TFJS_FILE_PATH ${TFJS_FILE_PATH}`);
  tar
    .c({ cwd: TFJS_PATH }, ['index.js', 'node_modules'])
    .pipe(
      // https://nodejs.org/api/zlib.html#zlib_class_brotlioptions
      zlib.createBrotliCompress({
        params: {
          [zlib.constants.BROTLI_PARAM_QUALITY]:
            // https://nodejs.org/api/zlib.html#zlib_compressor_options
            zlib.constants.BROTLI_MAX_QUALITY,
        },
      }),
    )
    .pipe(fs.createWriteStream(TFJS_FILE_PATH));
  core.info('end compiling');
}
