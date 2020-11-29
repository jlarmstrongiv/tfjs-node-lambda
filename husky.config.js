module.exports = {
  hooks: {
    "prepare-commit-msg": "exec < /dev/tty && git cz --hook || true",
  },
};
