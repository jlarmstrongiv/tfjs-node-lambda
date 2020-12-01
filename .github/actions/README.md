# Notes

All custom actions must be added to both the `package.json` and `lint-staged.config.js`.

Due to `lint-staged.config.js` building only on changed files, no shared directories are allowed.

You must you the `import * as core from '@actions/core'` syntax due to `@vercel/ncc`. You cannot use `import core from '@actions/core'`.

For more helpful libraries, check out the [GitHub Actions Toolkit](https://github.com/actions/toolkit).

Each action must have an `index.ts` and a `main.ts`. The `main.ts` is meant to run locally, while the `index.ts` is meant to run with the GitHub Actions Toolkit on the cloud. Try to keep as much as possible in `main.ts`.
