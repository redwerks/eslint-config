# `@redwerks/eslint-config-react`

![npm](https://img.shields.io/npm/v/redwerks/eslint-config-react) ![devDeps](https://img.shields.io/david/dev/redwerks/eslint-config-react?path=packages%2Feslint-config-react) ![peerDeps](https://img.shields.io/david/peer/redwerks/eslint-config?path=packages%2Feslint-config-react)

React extensions for [@redwerks/eslint-config](https://github.com/redwerks/eslint-config/tree/master/packages/eslint-config).

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
  extends: ['@redwerks/eslint-config', '@redwerks/eslint-config-react']
};
```
