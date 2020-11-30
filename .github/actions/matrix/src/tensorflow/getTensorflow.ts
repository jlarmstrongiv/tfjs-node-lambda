import getLatestVersion from 'get-latest-version';
const NPM_PACKAGE = '@tensorflow/tfjs-node';

export default async function getTensorflow() {
  const latestVersion: string = await getLatestVersion(NPM_PACKAGE, {
    auth: false,
  });

  const latestMajorVersion = await latestVersion.split('.')[0];

  // https://stackoverflow.com/a/33352604
  const allMajorVersions = Array.from(
    Array(Number(latestMajorVersion) + 1).keys(),
  );

  return allMajorVersions;
}
