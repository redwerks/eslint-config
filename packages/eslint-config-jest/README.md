# `@redwerks/eslint-config-jest`

Jest extensions for @redwerks/eslint-config.

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
