module.exports = {
  '*': () => 'prettier --write .',
  '*.{ts,tsx}': 'tsc',
}
