module.exports = {
  '*.{js,jsx,ts,tsx,css,md,json}': 'prettier --write',
  'package.json': 'sort-package-json',
  '.github/actions/matrix/**': () =>
    'npx @vercel/ncc build -m -C .github/actions/matrix/src/index.ts -o .github/actions/matrix/dist',
};
