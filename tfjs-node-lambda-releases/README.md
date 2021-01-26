# THIS PACKAGE IS SOFT-DEPRECATED

†[tfjs-node-lambda-releases](https://www.npmjs.com/package/tfjs-node-lambda-releases) is soft deprecated. Due to file size limitations, 6 releases are too big to be published on npm. Use the assets on [GitHub Releases](https://github.com/jlarmstrongiv/tfjs-node-lambda/releases) instead.

The last “official” release was v1.6.7 with:

- nodejs10.x-tf1.7.4.br
- nodejs10.x-tf2.8.5.br
- nodejs12.x-tf1.7.4.br
- nodejs12.x-tf2.8.5.br

No changes or migrations are required with:

- [tfjs-node-lambda](https://www.npmjs.com/package/tfjs-node-lambda)
- [tfjs-node-lambda-helpers](https://www.npmjs.com/package/tfjs-node-lambda-helpers)

# tfjs-node-lambda-releases

This package only contains the releases for `tfjs-node-lambda`. A release is the `@tensorflow/tfjs-node` package and its dependencies compiled and exported for AWS Lambda Node, which is bundled with `tar` and then compressed with `brotli` (highest quality).

See the GitHub [repository](https://github.com/jlarmstrongiv/tfjs-node-lambda/blob/main/matrix.json) for version information. This package will always contain a matrix of the currently supported AWS Lambda Node environments and the `@tensorflow/tfjs-node` latest major versions.

Example matrix:

```json
{
  "lambda": ["nodejs10.x", "nodejs12.x"],
  "tensorflow": ["1.7.4", "2.8.5", "3.0.0"]
}
```

Example releases:

```
nodejs10.x-tf1.7.4.br
nodejs10.x-tf2.8.5.br
nodejs10.x-tf3.0.0.br
nodejs12.x-tf1.7.4.br
nodejs12.x-tf2.8.5.br
nodejs12.x-tf3.0.0.br
```

Using GitHub actions, these versions are updated daily around midnight. Lock your versions with the `--save-exact` flag.

<!-- Double check `tfjs-node-lambda` and `tfjs-node-lambda-releases` are the same matching versions. -->

## Installation

```bash
npm install --save --save-exact tfjs-node-lambda tfjs-node-lambda-helpers
npm install --save-dev --save-exact @tensorflow/tfjs-node @tensorflow/tfjs
```

<!-- tfjs-node-lambda-releases -->

### Related libraries

- [tfjs-node-lambda](https://www.npmjs.com/package/tfjs-node-lambda)
- [tfjs-node-lambda-helpers](https://www.npmjs.com/package/tfjs-node-lambda-helpers)
- [@tensorflow/tfjs-node](https://www.npmjs.com/package/@tensorflow/tfjs-node)
- [@tensorflow/tfjs](https://www.npmjs.com/package/@tensorflow/tfjs)

## Contributing

We welcome contributions!

†[tfjs-node-lambda-releases](https://www.npmjs.com/package/tfjs-node-lambda-releases) is soft deprecated. Due to file size limitations, 6 releases are too big to be published on npm. Use the assets on [GitHub Releases](https://github.com/jlarmstrongiv/tfjs-node-lambda/releases) instead.
