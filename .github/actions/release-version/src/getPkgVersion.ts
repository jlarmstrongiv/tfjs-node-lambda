import fs from 'fs-extra';
import path from 'path';

export default async function getPkgVersion(): Promise<string> {
  const pkgPath = path.join(process.cwd(), 'package.json');
  const pkg = await fs.readJson(pkgPath);
  return pkg.version;
}
