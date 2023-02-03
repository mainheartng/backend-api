module.exports = { 
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [2, 'always', ['feat','feat-req', 'feat-request', 'bug', 'meeting', 'discussion', 'management']],
  },
  helpUrl: "https://github.com/mainheartng/organization/blob/main/gitflow-general.md"
};
