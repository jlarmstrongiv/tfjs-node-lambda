import * as core from '@actions/core';
import main from './main';

try {
  const lambda = core.getInput('lambda');
  const tensorflow = core.getInput('tensorflow');
  const binary = core.getInput('binary');

  core.info(lambda);
  core.info(tensorflow);
  core.info(binary);

  main({
    lambda,
    tensorflow,
    binary,
  }).then(({ stringifiedOutputs, outputs }) => {});
} catch (error) {
  core.setFailed(error.message);
}
