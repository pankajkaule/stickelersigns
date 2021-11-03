module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
    allowImportExportEverywhere: false,
    codeFrame: false,
  },
  extends: ['airbnb', 'prettier'],
  env: {
    browser: true,
    jest: true,
  },
  rules: {
    'max-len': ['error', { code: 150, ignoreStrings: true }],
    'prefer-promise-reject-errors': ['off'],
    'react/jsx-filename-extension': ['off'],
    'react/prop-types': ['warn'],
    'no-return-assign': ['off'],
    'array-callback-return': ['error', { allowImplicit: true }],
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'no-template-curly-in-string': 'error',
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'no-alert': 0,
    'react/jsx-wrap-multilines': [
      'error',
      {
        declaration: 'parens-new-line',
        assignment: 'parens-new-line',
        return: 'parens-new-line',
        arrow: 'parens-new-line',
        condition: 'parens-new-line',
        logical: 'ignore',
        prop: 'ignore',
      },
    ],
    'react/jsx-props-no-spreading': [0],
    'react/jsx-curly-newline': 0,
  },
};
