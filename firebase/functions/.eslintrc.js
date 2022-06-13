module.exports = {
  "root": true,
  "env": {
    es6: true,
    node: true,
    browser: true,
  },
  "extends": [
    "eslint:recommended",
    "google",
  ],
  "parserOptions": {
    "sourceType": "module",
    "ecmaVersion": 8,
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
    },
  },
  "rules": {
    "quotes": ["error", "double"],
    "require-jsdoc": 0,
    "max-len": ["error", {"code": 2000}],

  },
};
