import getPkgVersion from './getPkgVersion';
import setReleasePkgVersion from './setReleasePkgVersion';

export default async function main() {
  const version = await getPkgVersion();
  await setReleasePkgVersion(version);

  const outputs = { version };
  const stringifiedOutputs = { version };
  return { outputs, stringifiedOutputs };
}

if (process.env.NODE_ENV === 'development') {
  console.log('NODE_ENV', process.env.NODE_ENV);
  main();
}
