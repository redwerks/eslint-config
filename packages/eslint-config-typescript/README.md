# `@redwerks/eslint-config-typescript`

TypeScript extensions for @redwerks/eslint-config.

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
