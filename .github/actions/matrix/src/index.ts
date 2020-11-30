import * as core from '@actions/core';
import main from './main';
import setOutputs from '../../shared/setOutputs';

try {
  core.info(`process.cwd() ${process.cwd()}`);
  core.info(`__dirname ${__dirname}`);

  main().then(({ stringifiedOutputs, outputs }) => {
    setOutputs(stringifiedOutputs);
  });
} catch (error) {
  core.setFailed(error.message);
}
