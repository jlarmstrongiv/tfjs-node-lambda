import fs from 'fs-extra';
import path from 'path';
import sortPackageJson from 'sort-package-json';

export default async function setReleasePkgVersion(version: string) {
  const pkgPath = path.join(
    process.cwd(),
    'tfjs-node-lambda-releases',
    'package.json',
  );

  const pkg = await fs.readJson(pkgPath);

  const {
    dependencies,
    devDependencies,
    optionalDependencies,
    ...existingPkg
  } = pkg;

  const newPkg = sortPackageJson({ ...existingPkg, version });

  await fs.outputJson(pkgPath, newPkg, { spaces: 2 });
}
