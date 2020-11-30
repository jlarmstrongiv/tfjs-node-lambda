// https://github.com/actions/toolkit
import * as core from '@actions/core';
import * as github from '@actions/github';

try {
  core.setOutput('lambda', JSON.stringify(['l1', 'l2']));
  core.setOutput('tensorflow', JSON.stringify(['l1', 'l2']));
  core.setOutput('shouldUpdate', 'false');
  // Get the JSON webhook payload for the event that triggered the workflow
  const payload = JSON.stringify(github.context.payload, undefined, 2);
  console.log(`The event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}
