# tfjs-node-lambda

## Why

It is difficult to run tensorflow in a lambda:

- Size constraints from the lambda environment (<50MB)
- Native code compilation for the lambda environment

This family of packages will handle that heavy lifting for you.

## Versions

See the GitHub [repository](https://github.com/jlarmstrongiv/tfjs-node-lambda/blob/main/matrix.json) for version information. This package will always contain a matrix of the currently supported AWS Lambda Node environments and the `@tensorflow/tfjs-node` latest major versions.

Example matrix:

```json
{
  "lambda": ["nodejs10.x", "nodejs12.x"],
  "tensorflow": ["1.7.4", "2.7.0"]
}
```

Example releases:

```
nodejs10.x-tf1.7.4.br
nodejs10.x-tf2.7.0.br
nodejs12.x-tf1.7.4.br
nodejs12.x-tf2.7.0.br
```

Using GitHub actions, these versions are updated daily around midnight. Lock your versions with the `--save-exact` flag. Double check `tfjs-node-lambda` and `tfjs-node-lambda-releases` are the same matching versions.

## Installation

```bash
npm install --save --save-exact tfjs-node-lambda tfjs-node-lambda-helpers
npm install --save-dev --save-exact tfjs-node-lambda-releases @tensorflow/tfjs-node @tensorflow/tfjs
```

### tfjs-node-lambda

```ts
import loadTf from 'tfjs-node-lambda';
```

Before running loadTf, you must ensure that the correct release is downloaded to the tmp dir. Use the [`tfjs-node-lambda-helpers`](https://www.npmjs.com/package/tfjs-node-lambda-helpers) to do it for you.

TODO: recognize `tfjs-node.br` as well as all release package names in the tmp dir.

### JavaScript

```js
const tf = await loadTf();
```

#### TypeScript

Due to having multiple supported versions of `@tensorflow/tfjs-node` and an irregular bundle method, you must specify the types:

```ts
const tf: typeof import('@tensorflow/tfjs') = await loadTf();
```

### tfjs-node-lambda-helpers

See the [npm](https://www.npmjs.com/package/tfjs-node-lambda-helpers) package for more documentation.

## Contributing

We welcome contributions!

### Committing

We use husky git hooks to automate commitizen. Due to this [issue](https://github.com/commitizen/cz-cli/issues/558), we recommend running `git commit -m "any or empty message"` and following the interactive mode. Thank you!
