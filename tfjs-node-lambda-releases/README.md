# tfjs-node-lambda-releases

Stub for [`tfjs-node-lambda`](https://www.npmjs.com/package/tfjs-node-lambda).

This package only contains the releases for `tfjs-node-lambda`. A release is the `@tensorflow/tfjs-node` package and its dependencies compiled and exported for AWS Lambda Node, which is bundled with `tar` and then compressed with `brotli` (highest quality).

See the GitHub [repository](https://github.com/jlarmstrongiv/tfjs-node-lambda/blob/main/matrix.json) for version information. This package will always contain a matrix of the currently supported AWS Lambda Node environments and `@tensorflow/tfjs-node` latest major versions. For example:

```json
{
  "lambda": ["nodejs10.x", "nodejs12.x"],
  "tensorflow": ["1.7.4", "2.7.0"]
}
```

Example releases are:

```
nodejs10.x-tf1.7.4.br
nodejs10.x-tf2.7.0.br
nodejs12.x-tf1.7.4.br
nodejs12.x-tf2.7.0.br
```

Using GitHub actions, these versions are updated daily around midnight. Lock your version by running:

```bash
npm install --save --save-exact tfjs-node-lambda
npm install --save-dev --save-exact tfjs-node-lambda-releases
```

Double check that you installed matching version numbers for both.
