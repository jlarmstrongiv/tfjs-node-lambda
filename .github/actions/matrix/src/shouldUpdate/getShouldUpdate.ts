import fs from 'fs-extra';
import path from 'path';
import deepEqual from 'deep-equal';

const CONFIG_FILE = 'matrix.json';

async function outputConfig(CONFIG_PATH, { lambda, tensorflow }) {
  await fs.outputJson(
    CONFIG_PATH,
    {
      lambda,
      tensorflow,
    },
    { spaces: 2 },
  );
}

export default async function getShouldUpdate({
  lambda,
  tensorflow,
}): Promise<Boolean> {
  // must be generated at runtime
  const CONFIG_PATH = path.join(process.cwd(), CONFIG_FILE);

  // if no config
  if (!(await fs.pathExists(CONFIG_PATH))) {
    await outputConfig(CONFIG_PATH, { lambda, tensorflow });
    return true;
  }

  // check existing config
  const config = await fs.readJson(CONFIG_PATH);

  const configsAreEqual = deepEqual(
    { lambda, tensorflow },
    { lambda: config.lambda, tensorflow: config.tensorflow },
  );

  if (configsAreEqual) {
    return false;
  } else {
    await outputConfig(CONFIG_PATH, { ...config, lambda, tensorflow });
    return true;
  }
}
