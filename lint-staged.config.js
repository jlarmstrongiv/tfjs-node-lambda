module.exports = {
  '*.{js,jsx,ts,tsx,css,md,json}': 'prettier --write',
  'package.json': 'sort-package-json',
  '.github/actions/matrix/src/**/*.ts': () =>
    'npx @vercel/ncc build -m -C .github/actions/matrix/src/index.ts -o .github/actions/matrix/dist',
  '.github/actions/compile/src/**/*.ts': () =>
    'npx @vercel/ncc build -m -C .github/actions/compile/src/index.ts -o .github/actions/compile/dist',
  '.github/actions/release-version/src/**/*.ts': () =>
    'npx @vercel/ncc build -m -C .github/actions/release-version/src/index.ts -o .github/actions/release-version/dist',
  '.github/actions/decompress/src/**/*.ts': () =>
    'npx @vercel/ncc build -m -C .github/actions/decompress/src/index.ts -o .github/actions/decompress/dist',
};
