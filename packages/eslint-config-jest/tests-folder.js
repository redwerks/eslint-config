module.exports = {
  extends: ['plugin:jest/recommended'],
  plugins: ['jest'],
  overrides: [
    {
      files: ['__tests__'],
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
