module.exports = {
  branches: 'main',
  repositoryUrl: 'https://github.com/jlarmstrongiv/tfjs-node-lambda',
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    '@semantic-release/npm',
    [
      '@semantic-release/github',
      {
        assets: ['tfjs-node-lambda-releases/*.br', 'matrix.json'],
        message:
          'ci: 🎡 release ${nextRelease.version}\n\n${nextRelease.notes}',
      },
    ],
  ],
};
