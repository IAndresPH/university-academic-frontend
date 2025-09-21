module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [2, 'always', ['feat', 'fix', 'docs', 'style', 'refactor', 'test', 'chore']],
    'scope-case': [0, 'always', []],
    'header-max-length': [2, 'always', 60],
    'subject-case': [0, 'never', []],
  },
};
