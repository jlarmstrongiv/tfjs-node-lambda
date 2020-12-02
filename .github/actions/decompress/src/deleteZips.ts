import rimraf from 'rimraf';
import path from 'path';

export default async function deleteZips(): Promise<void> {
  return await new Promise((resolve, reject) => {
    rimraf(path.join(process.cwd(), 'tfjs-node-lambda-releases', '*.zip'), () =>
      resolve(),
    );
  });
}
