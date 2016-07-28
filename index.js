module.exports = {
  "parserOptions": {
    "ecmaVersion": 6
  },
  "env": {
    "node": true,
    "browser": false,
    "es6": true
  },
  "ecmaFeatures": {
    "arrowFunctions": true,
    "blockBindings": true,
    "objectLiteralShorthandMethods": true,
    "objectLiteralShorthandProperties": true,
    "destructuring": true,
    "templateStrings": true
  },
  "extends": "eslint:recommended",
  "rules": {
    "no-var": 2,
    "prefer-const": 2,
    "no-const-assign": 2,
    "no-mixed-requires": 2,
    "curly": 2,
    "camelcase": 2,
    "no-process-exit": 0,
    "eqeqeq": [2, "smart"],
    "no-shadow": 0,
    "no-underscore-dangle": 0,
    "no-use-before-define": 0,
    "guard-for-in": 2,
    "no-else-return": 2,
    "no-floating-decimal": 2,
    "no-param-reassign": 0,
    "no-self-compare": 2,
    "no-undef": 2,
    "no-unused-vars": 2,
    "no-undefined": 0,
    "no-console": 0,
    "semi": [ 2, "always" ],
    "no-extra-semi": 2,
    "brace-style": [ 2, "1tbs", { "allowSingleLine": true } ],
    "indent": [ 2, 4, { "SwitchCase": 1 } ],
    "quotes": [ 2, "single" ],
    "array-bracket-spacing": [ "error", "always", { "arraysInArrays": false } ],
    "object-curly-spacing": [ "error", "always" ],
    "space-before-function-paren": [ 2, {
      "anonymous": "never",
      "named": "never"
    }],
    "no-multiple-empty-lines": [ 2, { "max": 2 } ],
    "max-nested-callbacks": [ 2, 4 ],
    "no-lonely-if": 2,
    "no-empty": 0,
    "comma-style": [ "error", "last" ],
    "eol-last": "error",
    "no-trailing-spaces": "error",
    "no-inline-comments": "error",
    "semi-spacing": "error",
    "space-in-parens": ["error", "never"],
    "space-infix-ops": "error",
    "no-plusplus": "error",
    "operator-linebreak": ["error", "after", { "overrides": { "?": "before", ":": "before" } }],
    "prefer-arrow-callback": ["error", { "allowNamedFunctions": true } ],
    "object-shorthand": "error",
    "arrow-parens": ["error", "as-needed"],
    "arrow-spacing": "error",
    "space-before-blocks": "error",
    "keyword-spacing": "error",
    "no-use-before-define": [ "error", { "functions": false } ]
  },
  "globals": {
    "it": true,
    "before": true,
    "after": true,
    "beforeEach": true,
    "afterEach": true,
    "context": true,
    "describe": true
  }
}
