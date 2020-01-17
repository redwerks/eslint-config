# `@redwerks/eslint-config`

Simple eslint configuration used by Redwerks.

## Features

- Uses eslint's built-in recommendations
- Uses the [eslint-comments](https://www.npmjs.com/package/eslint-plugin-eslint-comments) plugin to warn about unused eslint comments and require disabled rules be re-enabled
- Configures eslint for use with prettier

## Usage

### `.eslintrc.js`

```js
module.exports = {
  root: true,
  env: {
    // Customize with the environments your project is run in
    // browser: true,
    // node: true,
  },
  extends: ['@redwerks/eslint-config']
};
```

## Extensions

Some optional features are published as separate packages because they use extra eslint packages.

- TypeScript support: @redwerks/eslint-config-typescript
- React support: @redwerks/eslint-config-react
- Jest support: @redwerks/eslint-config-jest
