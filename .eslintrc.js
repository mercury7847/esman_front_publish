module.exports = {
  parser: 'vue-eslint-parser',
  parserOptions:
    {
      "extends": "standard",
      "parser": "babel-eslint"
    },
  extends: [

    'plugin:vue/recommended',
    "plugin:prettier/recommended"
  ],
  rules: {
    'prettier/prettier': [
      'off',
    ],
    'no-promise-executor-return': 'off',
    'import/no-named-as-default': 'off',
    'spaced-comment': 'off',
    'import/order': 'off',
    'import/no-named-as-default-member': 'off',
    'import/newline-after-import': 'off',
    'prefer-exponentiation-operator': 'off',
    'no-useless-backreference': 'off',
  },
};
