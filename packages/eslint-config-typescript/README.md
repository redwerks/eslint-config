# `@redwerks/eslint-config-typescript`

[![npm](https://img.shields.io/npm/v/redwerks/eslint-config-typescript)](https://www.npmjs.com/package/@redwerks/eslint-config-typescript) ![devDeps](https://img.shields.io/david/dev/redwerks/eslint-config-typescript?path=packages%2Feslint-config-typescript) ![peerDeps](https://img.shields.io/david/peer/redwerks/eslint-config?path=packages%2Feslint-config-typescript)

TypeScript extensions for [@redwerks/eslint-config](https://github.com/redwerks/eslint-config/tree/master/packages/eslint-config).

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
  extends: ['@redwerks/eslint-config', '@redwerks/eslint-config-typescript']
};
```

Monorepo projects may need to configure `tsconfigRootDir` manually.

```js
module.exports = {
  root: true,
  env: {
    // Customize with the environments your project is run in
    // browser: true,
    // node: true,
  },
  extends: ['@redwerks/eslint-config', '@redwerks/eslint-config-typescript'],
  parserOptions: {
    tsconfigRootDir: __dirname
  }
};
```
