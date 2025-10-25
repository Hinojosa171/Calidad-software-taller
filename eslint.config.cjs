const prettier = require('eslint-plugin-prettier');
const eslintConfigPrettier = require('eslint-config-prettier');

module.exports = [
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'commonjs',
      globals: {
        node: true
      }
    },
    plugins: {
      prettier
    },
    rules: {
      'prettier/prettier': 'error'
    },
    extends: [eslintConfigPrettier]
  }
];
