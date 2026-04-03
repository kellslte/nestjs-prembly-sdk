#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

class ChangelogUpdater {
  constructor() {
    this.changelogPath = path.join(process.cwd(), 'CHANGELOG.md');
    this.commitPattern =
      /^(feat|fix|docs|style|refactor|perf|test|chore|ci|build|revert)(?:\(([\w-]+)\))?(!)?: (.+)$/;
  }

  getCommitsSinceLastTag() {
    try {
      const lastTag = execSync('git describe --tags --abbrev=0', {
        encoding: 'utf8',
        stdio: ['pipe', 'pipe', 'ignore'],
      }).trim();
      const commits = execSync(`git log ${lastTag}..HEAD --oneline --format="%s"`, {
        encoding: 'utf8',
        stdio: ['pipe', 'pipe', 'ignore'],
      });
      return commits.split('\n').filter(Boolean);
    } catch (_error) {
      try {
        const commits = execSync('git log -10 --oneline --format="%s"', {
          encoding: 'utf8',
          stdio: ['pipe', 'pipe', 'ignore'],
        });
        return commits.split('\n').filter(Boolean);
      } catch (_err) {
        console.warn('Warning: Could not get git commits');
        return [];
      }
    }
  }

  categorizeCommits(commits) {
    const categories = {
      'Breaking Changes': [],
      Features: [],
      'Bug Fixes': [],
      Documentation: [],
      Tests: [],
      Chores: [],
      Performance: [],
      Refactor: [],
      'Other Changes': [],
    };

    for (const commit of commits) {
      const match = commit.match(this.commitPattern);

      if (!match) {
        categories['Other Changes'].push(commit);
        continue;
      }

      const [, type, _scope, breakingFlag, description] = match;

      if (breakingFlag) {
        categories['Breaking Changes'].push(description);
        continue;
      }

      if (type === 'feat') {
        categories.Features.push(description);
      } else if (type === 'fix') {
        categories['Bug Fixes'].push(description);
      } else if (type === 'perf') {
        categories.Performance.push(description);
      } else if (type === 'refactor') {
        categories.Refactor.push(description);
      } else if (type === 'docs') {
        categories.Documentation.push(description);
      } else if (type === 'test') {
        categories.Tests.push(description);
      } else if (type === 'chore' || type === 'ci' || type === 'build') {
        categories.Chores.push(description);
      } else {
        categories['Other Changes'].push(description);
      }
    }

    return categories;
  }

  formatCategories(categories) {
    let content = '';

    for (const [category, items] of Object.entries(categories)) {
      if (items.length === 0) {
        continue;
      }

      content += `### ${category}\n`;
      for (const item of items) {
        content += `- ${item}\n`;
      }
      content += '\n';
    }

    return content;
  }

  generateChangelogEntry(version, commits) {
    const categories = this.categorizeCommits(commits);
    const today = new Date().toISOString().split('T')[0];
    let entry = `## [${version}] - ${today}\n\n`;
    const formattedCategories = this.formatCategories(categories);

    if (formattedCategories.trim().length > 0) {
      entry += formattedCategories;
    } else {
      entry += '### Chores\n';
      entry += `- Release ${version}\n\n`;
    }

    return entry;
  }

  updateChangelog() {
    console.log('Updating changelog...');
    let changelog = fs.readFileSync(this.changelogPath, 'utf8');
    const commits = this.getCommitsSinceLastTag();

    if (commits.length === 0) {
      console.log('No new commits found since last tag');
      return;
    }

    const packageJson = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'package.json'), 'utf8'));
    const currentVersion = packageJson.version;
    const newEntry = this.generateChangelogEntry(currentVersion, commits);

    const unreleasedSectionPattern = /(## \[Unreleased\]\n[\s\S]*?)(?=\n## \[|$)/;

    if (unreleasedSectionPattern.test(changelog)) {
      changelog = changelog.replace(
        unreleasedSectionPattern,
        (match) => `${match.trimEnd()}\n\n${newEntry.trimEnd()}\n`,
      );
    } else {
      const headerEnd = changelog.indexOf('\n\n');
      changelog =
        changelog.slice(0, headerEnd + 2) + `${newEntry.trimEnd()}\n\n` + changelog.slice(headerEnd + 2);
    }

    fs.writeFileSync(this.changelogPath, changelog);
    console.log('Changelog updated successfully');
  }

  generateFullChangelog() {
    console.log('Generating full changelog from git history...');

    const tags = execSync('git tag --sort=-version:refname', {
      encoding: 'utf8',
      stdio: ['pipe', 'pipe', 'ignore'],
    })
      .split('\n')
      .filter(Boolean)
      .map((tag) => tag.replace('v', ''));

    let changelog = '# Changelog\n\n';
    changelog += 'All notable changes to this project will be documented in this file.\n\n';
    changelog +=
      'The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),\n';
    changelog +=
      'and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).\n\n';

    const unreleasedCommits = this.getCommitsSinceLastTag();
    if (unreleasedCommits.length > 0) {
      changelog += '## [Unreleased]\n\n';
      const categories = this.categorizeCommits(unreleasedCommits);
      changelog += this.formatCategories(categories);
    }

    for (const tag of tags) {
      let commits = [];
      try {
        const previousTag = execSync(`git describe --tags --abbrev=0 v${tag}~1`, {
          encoding: 'utf8',
          stdio: ['pipe', 'pipe', 'ignore'],
        }).trim();
        commits = execSync(`git log ${previousTag}..v${tag} --oneline --format="%s"`, {
          encoding: 'utf8',
          stdio: ['pipe', 'pipe', 'ignore'],
        })
          .split('\n')
          .filter(Boolean);
      } catch (_error) {
        commits = execSync(`git log v${tag} --oneline --format="%s"`, {
          encoding: 'utf8',
          stdio: ['pipe', 'pipe', 'ignore'],
        })
          .split('\n')
          .filter(Boolean);
      }

      if (commits.length > 0) {
        changelog += this.generateChangelogEntry(tag, commits);
      }
    }

    fs.writeFileSync(this.changelogPath, changelog);
    console.log('Full changelog generated successfully');
  }

  run() {
    const args = process.argv.slice(2);
    if (args.includes('--full') || args.includes('-f')) {
      this.generateFullChangelog();
    } else {
      this.updateChangelog();
    }
  }
}

if (require.main === module) {
  new ChangelogUpdater().run();
}

module.exports = ChangelogUpdater;
