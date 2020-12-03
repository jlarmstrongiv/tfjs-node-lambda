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

### Related libraries

- [tfjs-node-lambda](https://www.npmjs.com/package/tfjs-node-lambda)
- [tfjs-node-lambda-releases](https://www.npmjs.com/package/tfjs-node-lambda-releases)
- [tfjs-node-lambda-helpers](https://www.npmjs.com/package/tfjs-node-lambda-helpers)
- [@tensorflow/tfjs-node](https://www.npmjs.com/package/@tensorflow/tfjs-node)
- [@tensorflow/tfjs](https://www.npmjs.com/package/@tensorflow/tfjs)

## tfjs-node-lambda

```ts
import loadTf from 'tfjs-node-lambda';
const tf: typeof import('@tensorflow/tfjs') = await loadTf(readStream);
```

The [`tfjs-node-lambda-helpers`](https://www.npmjs.com/package/tfjs-node-lambda-helpers) can help determine environments, generate release urls, download releases, and avoid timeouts. If you would prefer to have full control, see the readStream examples below.

#### readStream

In development, `loadTf` will run your locally installed version of `@tensorflow/tfjs-node`. If running in an AWS Lambda environment, `loadTf` expects a readStream of the release:

```ts
import fs from 'fs';

const response = await axios.get(
  'https://github.com/jlarmstrongiv/tfjs-node-lambda/releases/download/v1.5.0/nodejs12.x-tf2.7.0.br',
  { responseType: 'arraybuffer' },
);

const readStream = fs.createReadStream(response.data);
```

Or, if you have saved the file to the tmp directory:

```ts
import os from 'os';
import path from 'path';

const readStream = fs.createReadStream(
  path.join(os.tmpdir(), 'nodejs12.x-tf2.7.0.br'),
);
```

#### JavaScript

```js
const tf = await loadTf(readStream);
```

#### TypeScript

Due to having multiple supported versions of `@tensorflow/tfjs-node` and an irregular bundle method, you must specify the types:

```ts
const tf: typeof import('@tensorflow/tfjs') = await loadTf(readStream);
```

## Contributing

We welcome contributions!

Inspired by and originally forked from Luc Leray’s [tensorflow-lambda](https://www.npmjs.com/package/tensorflow-lambda).
