module.exports = {
  extends: ['plugin:jest/recommended'],
  plugins: ['jest'],
  overrides: [
    {
      files: ['**/*.spec.js'],
      env: {
        'jest/globals': true
      },
      rules: {
        'jest/consistent-test-it': [
          'error',
          {
            fn: 'it'
          }
        ]
        // @todo Extend eslint-plugin-jest recommended configs here
      }
    }
  ]
};
