import axios from 'axios';

export default async function getCurrentVersions(
  allVersions: string[],
): Promise<string[]> {
  const awsDocsResponse = await axios.get(
    'https://cdn.jsdelivr.net/gh/awsdocs/aws-lambda-developer-guide/doc_source/lambda-runtimes.md',
  );
  const awsDocs = awsDocsResponse.data as string;

  const currentVersions = allVersions.filter((version) =>
    awsDocs.includes(version),
  );

  return currentVersions;
}
