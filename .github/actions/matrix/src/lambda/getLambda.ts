import axios from 'axios';

export default async function getLambda(): Promise<string[]> {
  const awsDocsResponse = await axios.get(
    'https://raw.githack.com/awsdocs/aws-lambda-developer-guide/main/doc_source/lambda-runtimes.md',
  );
  const awsDocs = awsDocsResponse.data as string;

  const lambdaRegex = /`nodejs\d+\.[\dx]+`/g;

  const roughMatches = awsDocs.match(lambdaRegex);
  const roughUniqueMatches = [...new Set(roughMatches)];
  const matches = roughUniqueMatches.map((roughMatch) =>
    roughMatch.replace(/`/g, '').replace('nodejs', '').replace('.x', ''),
  );

  return matches;
}
