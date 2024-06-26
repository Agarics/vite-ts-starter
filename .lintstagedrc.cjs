module.exports = {
  '*.{js,ts}': ['prettier --write', 'eslint --fix'],
  '{!(package)*.json,*.code-snippets,.!(browserslist)*rc}': [
    'prettier --write--parser json',
  ],
  'package.json': ['prettier --write'],
  '*.md': ['prettier --write'],
};
