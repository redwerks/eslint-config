module.exports = {
  parserOptions: {
    project: './tsconfig.json',
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      extends: [
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier/@typescript-eslint',
      ],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint'],
      rules: {
        '@typescript-eslint/explicit-function-return-type': [
          'warn',
          {
            // There's no good reason to be strict about return types where it's already explicitly defined elsewhere
            allowExpressions: true,
            allowTypedFunctionExpressions: true,
            allowHigherOrderFunctions: true,
          },
        ],
        // There are perfectly good reasons to write empty functions
        '@typescript-eslint/no-empty-function': 'off',
      },
    },
  ],
};
