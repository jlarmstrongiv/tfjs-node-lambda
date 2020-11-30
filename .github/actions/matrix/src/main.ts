/**
 * No github/actions/toolkit allowed
 * Main should be able to run locally
 */
import { Outputs } from './outputs';
import getLambda from './lambda/getLambda';
import getTensorflow from './tensorflow/getTensorflow';

export default async function main() {
  const [lambda, tensorflow] = await Promise.all([
    getLambda(),
    getTensorflow(),
  ]);

  // writes files to repository
  // const shouldUpdate = await shouldUpdate();
  const shouldUpdate = true;

  const outputs = {
    lambda,
    tensorflow,
    shouldUpdate,
  };
  const stringifiedOutputs = {
    lambda: JSON.stringify(lambda),
    tensorflow: JSON.stringify(tensorflow),
    shouldUpdate: String(shouldUpdate),
  };
  return { outputs, stringifiedOutputs };
}

if (process.env.NODE_ENV === 'development') {
  console.log('NODE_ENV', process.env.NODE_ENV);
  main();
}
