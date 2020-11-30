// Not supported by @vercel/ncc
// import core from '@actions/core';
// Must use the * syntax
// https://github.com/actions/toolkit

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
