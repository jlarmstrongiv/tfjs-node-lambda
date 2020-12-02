import * as core from '@actions/core';
import main from './main';

try {
  main();
} catch (error) {
  core.setFailed(error.message);
}
