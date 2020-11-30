// env vars for tensorflow/node version
// sort package json
// https://codeburst.io/execa-v2-20ffafeedfdf

import core from '@actions/core';
import main from './main';

try {
  const lambda = core.getInput('lambda') || process.env.LAMBDA;
  const tensorflow = core.getInput('tensorflow') || process.env.TENSORFLOW;

  core.info(lambda);
  core.info(tensorflow);

  main().then(({ stringifiedOutputs, outputs }) => {});
} catch (error) {
  core.setFailed(error.message);
}
