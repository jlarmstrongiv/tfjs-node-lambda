/**
 * No github/actions/toolkit allowed
 * Main should be able to run locally
 */
import getLambda from './lambda/getLambda';
import getTensorflow from './tensorflow/getTensorflow';
import getShouldUpdate from './shouldUpdate/getShouldUpdate';

export default async function main() {
  const [lambda, tensorflow] = await Promise.all([
    getLambda(),
    getTensorflow(),
  ]);

  // writes files to repository
  const shouldUpdate = await getShouldUpdate({ lambda, tensorflow });

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
