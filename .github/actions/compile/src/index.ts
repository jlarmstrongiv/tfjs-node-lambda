// env vars for tensorflow/node version
// sort package json
// https://codeburst.io/execa-v2-20ffafeedfdf

import path from 'path';
import * as core from '@actions/core';
import main from './main';

try {
  const lambda = core.getInput('lambda');
  const tensorflow = core.getInput('tensorflow');

  core.info(lambda);
  core.info(tensorflow);

  main({ lambda, tensorflow }).then(({ stringifiedOutputs, outputs }) => {
    core.setOutput('asset', path.join(process.cwd(), 'binary.txt'));
  });
} catch (error) {
  core.setFailed(error.message);
}
