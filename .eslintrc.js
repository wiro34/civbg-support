module.exports = {
  root: true,
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true
  },
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  rules: {
    'no-debugger': 0,
    'comma-dangle': ['error', {
      'arrays': 'only-multiline',
      'objects': 'only-multiline',
      'imports': 'only-multiline',
      'exports': 'only-multiline',
      'functions': 'never',
    }]
  },
  globals: {}
}
