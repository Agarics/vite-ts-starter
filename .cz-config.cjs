module.exports = {
  types: [
    { value: 'feat', name: 'feat: A new feature' },
    { value: 'fix', name: 'fix: A bug fix' },
    { value: 'docs', name: 'docs: Documentation only changes' },
    {
      value: 'style',
      name: 'style: Changes that do not affect the meaning of the code\n(white-space, formatting, missing semi-colons, etc)',
    },
    {
      value: 'refactor',
      name: 'refactor: A code change that neither fixes a bug nor adds a feature',
    },
    {
      value: 'perf',
      name: 'perf: A code change that improves performance',
    },
    { value: 'test', name: 'test: Adding missing tests' },
    {
      value: 'chore',
      name: 'chore: Changes to the build process or auxiliary tools\nand libraries such as documentation generation',
    },
    { value: 'revert', name: 'revert: Revert to a commit' },
    { value: 'WIP', name: 'WIP: Work in progress' },
  ],

  scopes: [],
  // override the messages, defaults are as follows
  messages: {
    type: "Select the type of change that you're committing:",
    subject: 'Write a SHORT, IMPERATIVE tense description of the change:\n',
    confirmCommit: 'Are you sure you want to proceed with the commit above?',
  },

  allowCustomScopes: true,
  allowBreakingChanges: [],
  // skip any questions you want
  skipQuestions: ['scope', 'body', 'footer'],
  // limit subject length
  subjectLimit: 100,
}
