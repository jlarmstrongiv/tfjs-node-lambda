import getAllVersions from './getAllVersions';
import getCurrentVersions from './getCurrentVersions';

export default async function getLambda(): Promise<string[]> {
  const allVersions = await getAllVersions();
  const currentVersions = await getCurrentVersions(allVersions);

  return currentVersions;
}
