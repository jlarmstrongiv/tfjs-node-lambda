module.exports = {
  branches: 'main',
  repositoryUrl: 'https://github.com/jlarmstrongiv/tfjs-node-lambda',
  plugins: [
    [
      '@semantic-release/commit-analyzer',
      {
        preset: 'angular',
        releaseRules: [
          // custom
          { type: 'chore', release: 'patch' },
          { type: 'style', release: 'patch' },
          { type: 'test', release: 'patch' },
          { type: 'refactor', release: 'patch' },
          { type: 'docs', release: 'patch' },
          { type: 'ci', release: 'patch' },
          // https://github.com/semantic-release/commit-analyzer/blob/master/lib/default-release-rules.js
          { breaking: true, release: 'major' },
          { revert: true, release: 'patch' },
          // Angular
          { type: 'feat', release: 'minor' },
          { type: 'fix', release: 'patch' },
          { type: 'perf', release: 'patch' },
          // Atom
          { emoji: ':racehorse:', release: 'patch' },
          { emoji: ':bug:', release: 'patch' },
          { emoji: ':penguin:', release: 'patch' },
          { emoji: ':apple:', release: 'patch' },
          { emoji: ':checkered_flag:', release: 'patch' },
          // Ember
          { tag: 'BUGFIX', release: 'patch' },
          { tag: 'FEATURE', release: 'minor' },
          { tag: 'SECURITY', release: 'patch' },
          // ESLint
          { tag: 'Breaking', release: 'major' },
          { tag: 'Fix', release: 'patch' },
          { tag: 'Update', release: 'minor' },
          { tag: 'New', release: 'minor' },
          // Express
          { component: 'perf', release: 'patch' },
          { component: 'deps', release: 'patch' },
          // JSHint
          { type: 'FEAT', release: 'minor' },
          { type: 'FIX', release: 'patch' },
        ],
      },
    ],

    '@semantic-release/release-notes-generator',
    '@semantic-release/npm',
    [
      '@semantic-release/github',
      {
        assets: ['**/*.br', 'matrix.json'],
        message:
          'ci: 🎡 release ${nextRelease.version}\n\n${nextRelease.notes}',
      },
    ],
  ],
};
