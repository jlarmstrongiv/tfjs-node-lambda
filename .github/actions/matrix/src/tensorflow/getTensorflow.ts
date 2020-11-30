import getLatestVersion from 'get-latest-version';
const NPM_PACKAGE = '@tensorflow/tfjs-node';

export default async function getTensorflow() {
  const latestVersion: string = await getLatestVersion(NPM_PACKAGE, {
    auth: false,
  });

  // ex: 2
  const latestMajorVersionNumber = await latestVersion.split('.')[0];

  // https://stackoverflow.com/a/33352604
  // ex: [0, 1, 2]
  const allMajorVersionNumbers = Array.from(
    Array(Number(latestMajorVersionNumber) + 1).keys(),
  );

  // ex: [1.7.4, 2.7.0]
  let allMajorVersions = [];
  for (const majorVersionNumber of allMajorVersionNumbers) {
    // https://github.com/rexxars/get-latest-version/issues/1
    if (majorVersionNumber === 0) continue;

    const majorVersion: string = await getLatestVersion(NPM_PACKAGE, {
      auth: false,
      range: `^${majorVersionNumber}.0.0`,
    });
    allMajorVersions.push(majorVersion);
  }

  return allMajorVersions;
}
