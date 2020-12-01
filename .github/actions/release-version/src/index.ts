import * as core from '@actions/core';
import main from './main';
import setOutputs from './setOutputs';

try {
  main().then(({ stringifiedOutputs }) => {
    setOutputs(stringifiedOutputs);
  });
} catch (error) {
  core.setFailed(error.message);
}
