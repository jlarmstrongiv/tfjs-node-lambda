import * as core from '@actions/core';
import { Outputs } from './outputs';

export default function setOutputs(outputs: Outputs) {
  Object.entries(outputs).forEach(([key, value]) => {
    core.setOutput(key, value);
    core.info(`${key}: ${value}`);
  });
}
