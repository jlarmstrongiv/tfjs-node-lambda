interface MainProps {
  lambda: string;
  tensorflow: string;
}
export default async function main({ lambda, tensorflow }: MainProps) {
  const outputs = {};
  const stringifiedOutputs = {};
  return { outputs, stringifiedOutputs };
}

if (process.env.NODE_ENV === 'development') {
  console.log('NODE_ENV', process.env.NODE_ENV);

  if (!process.env.LAMBDA) {
    throw new Error('process.env.LAMBDA is undefined');
  }
  if (!process.env.TENSORFLOW) {
    throw new Error('process.env.TENSORFLOW is undefined');
  }

  main({
    lambda: process.env.LAMBDA,
    tensorflow: process.env.TENSORFLOW,
  });
}
