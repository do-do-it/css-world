module.exports = {
  root: true,
  env: {
    node: true
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'space-before-function-paren': ["error", {
      "anonymous": "always",
      "named": "never",
      "asyncArrow": "always"
    }]
  },
  parserOptions: {
    parser: '@typescript-eslint/parser'
  }
}
