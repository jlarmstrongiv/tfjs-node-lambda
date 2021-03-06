import * as core from '@actions/core';
import main from './main';

try {
  // keep format for backwards compatibility nodejs10.x-tf1.7.4.br
  const lambda = `nodejs${core.getInput('lambda')}.x`;
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
