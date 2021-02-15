module.exports = {
  "env": {
    "browser": true,
    "node": true,
    "jquery": true
  },
  "extends": ["airbnb-base"],
  "rules": {
    "arrow-parens": ["error", "always"],
    "camelcase": "off",
    "comma-dangle": ["error", "only-multiline"],
    "class-methods-use-this": "off",
    "function-paren-newline": "off",
    "indent": "off",
    "import/no-unresolved": "off",
    "import/no-extraneous-dependencies": "off",
    "import/extensions": [
      "error",
      "never",
      {
        "js": "off",
        "svg": "always",
        "scss": "always",
        "css": "always"
      }
    ],
    "max-len": [
      "error",
      {
        "code": 100,
        "ignoreUrls": true,
        "ignoreRegExpLiterals": true,
        "ignoreStrings": true,
        "ignoreComments": true
      }
    ],
    "no-console": "off",
    "no-mixed-operators": "off",
    "no-restricted-globals": "off",
    "no-underscore-dangle": "off",
    "object-curly-newline": ["error", { "consistent": true }],
    "require-jsdoc": [
      "warn",
      {
        "require": {
          "FunctionDeclaration": true,
          "MethodDefinition": false,
          "ClassDeclaration": false,
          "ArrowFunctionExpression": false
        }
      }
    ]
  }
}