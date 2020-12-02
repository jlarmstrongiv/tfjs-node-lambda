import decompressZips from './decompressZips';
import deleteZips from './deleteZips';

export default async function main() {
  await decompressZips();
  await deleteZips();
}

if (process.env.NODE_ENV === 'development') {
  console.log('NODE_ENV', process.env.NODE_ENV);
  main();
}
