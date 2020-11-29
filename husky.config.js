const tasks = (t) => t.join(' && ');

module.exports = {
  hooks: {
    'pre-commit': 'lint-staged',
    'prepare-commit-msg': tasks([
      'exec < /dev/tty && git cz --hook || true',
      'npx cspell -- --no-summary $(git diff --cached --name-only)',
    ]),
  },
};
