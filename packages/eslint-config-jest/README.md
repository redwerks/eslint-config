# `@redwerks/eslint-config-jest`

[![npm](https://img.shields.io/npm/v/redwerks/eslint-config-jest)](https://www.npmjs.com/package/@redwerks/eslint-config-jest) ![devDeps](https://img.shields.io/david/dev/redwerks/eslint-config-jest?path=packages%2Feslint-config-jest) ![peerDeps](https://img.shields.io/david/peer/redwerks/eslint-config?path=packages%2Feslint-config-jest)

Jest extensions for [@redwerks/eslint-config](https://github.com/redwerks/eslint-config/tree/master/packages/eslint-config).

## Usage

### `.eslintrc.js`

If your project uses `__tests__` folders for tests.

```js
module.exports = {
  root: true,
  env: {
    // Customize with the environments your project is run in
    // browser: true,
    // node: true,
  },
  extends: [
    '@redwerks/eslint-config',
    '@redwerks/eslint-config-jest/tests-folder'
  ]
};
```

If your project uses `*.spec.js` files for tests.

```js
module.exports = {
  root: true,
  env: {
    // Customize with the environments your project is run in
    // browser: true,
    // node: true,
  },
  extends: ['@redwerks/eslint-config', '@redwerks/eslint-config-jest/spec']
};
```
