# Notes

All custom actions must be added to both the `package.json` and `lint-staged.config.js`.

The `tsconfig.json` file in root applies to the custom actions.

Each action must have an `index.ts` and a `main.ts`. The `main.ts` is meant to run locally, while the `index.ts` is meant to run with the GitHub Actions Toolkit on the cloud. Try to keep as much as possible in `main.ts`.

## Lint-staged

Due to `lint-staged.config.js` building only on changed files, no shared directories are allowed.

According to the [migration guide](https://github.com/okonet/lint-staged#v10):

> From v10.0.0 onwards any new modifications to originally staged files will be automatically added to the commit. If your task previously contained a git add step, please remove this. The automatic behavior ensures there are less race-conditions, since trying to run multiple git operations at the same time usually results in an error.

This means that lint-staged will automatically add all changes in the staging area, but will not detect new changes in `dist` folders. As a result, a second commit must be made with the compiled files.

GitHub [custom actions](https://docs.github.com/en/free-pro-team@latest/actions/creating-actions/creating-a-javascript-action#commit-tag-and-push-your-action-to-github) requires either the `node_modules` folder or the compiled files to run.

## Actions toolkit

You must you the `import * as core from '@actions/core'` syntax due to `@vercel/ncc`. You cannot use `import core from '@actions/core'`.

For more helpful libraries, check out the [GitHub Actions Toolkit](https://github.com/actions/toolkit).
