module.exports = {
  env: {
    es6: true
  },
  extends: [
    'eslint:recommended',
    'plugin:eslint-comments/recommended',
    'plugin:prettier/recommended'
  ],
  rules: {
    // Lint issues with eslint comments
    'eslint-comments/no-unused-disable': 'warn',
    'eslint-comments/disable-enable-pair': [
      'error',
      {
        allowWholeFile: true
      }
    ],
    // Warn about prettier formatting
    'prettier/prettier': 'warn'
  }
};
