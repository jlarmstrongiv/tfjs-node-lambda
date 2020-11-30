import axios from 'axios';

export default async function getAllVersions(): Promise<string[]> {
  const lambdaReadmeResponse = await axios.get(
    'https://cdn.jsdelivr.net/gh/lambci/docker-lambda/README.md',
  );
  const lambdaReadme = lambdaReadmeResponse.data as string;

  const lambdaRegex = /`nodejs\d+\.[\dx]+`/g;

  const roughMatches = lambdaReadme.match(lambdaRegex);
  const roughDeduplicatedMatches = [...new Set(roughMatches)];
  const matches = roughDeduplicatedMatches.map((roughMatch) =>
    roughMatch.replace(/`/g, ''),
  );

  return matches;
}
