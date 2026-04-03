#!/usr/bin/env node

const fs = require('fs');

class CommitMessageHook {
  constructor() {
    this.commitMsgFile = process.argv[2];
  }

  readCommitMessage() {
    try {
      return fs.readFileSync(this.commitMsgFile, 'utf8').trim();
    } catch (error) {
      console.error('Error reading commit message file:', error.message);
      process.exit(1);
    }
  }

  validateCommitMessage(message) {
    if (message.startsWith('Merge') || message.startsWith('Revert')) {
      return true;
    }

    const conventionalPattern =
      /^(feat|fix|docs|style|refactor|perf|test|chore|ci|build|revert)(?:\(([\w-]+)\))?(!)?: (.+)/;

    if (!conventionalPattern.test(message)) {
      return false;
    }

    const match = message.match(conventionalPattern);
    return !!(match && match[4] && match[4].trim().length > 0);
  }

  showError(message) {
    console.error('\nInvalid commit message format');
    console.error(`\nReceived: "${message}"`);
    console.error('\nCommit message must follow the conventional commit format:');
    console.error('\n  <type>[optional scope]: <description>');
    console.error('\nExamples:');
    console.error('  feat: add new verification method');
    console.error('  fix(api): resolve fraud-scan path issue');
    console.error('  docs: update README with release steps');
    console.error('  test: add release workflow coverage');
    console.error('  chore: update dependencies');
    console.error('  feat!: breaking change in API');
    console.error(
      '\nTypes: feat, fix, docs, style, refactor, perf, test, chore, ci, build, revert',
    );
    console.error('\nFor more information, see: https://www.conventionalcommits.org/');
    process.exit(1);
  }

  run() {
    const message = this.readCommitMessage();
    if (!this.validateCommitMessage(message)) {
      this.showError(message);
    }
    console.log('Commit message format is valid');
  }
}

if (require.main === module) {
  new CommitMessageHook().run();
}

module.exports = CommitMessageHook;
