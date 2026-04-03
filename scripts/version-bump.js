#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

class VersionBumper {
  constructor() {
    this.packageJsonPath = path.join(process.cwd(), 'package.json');
    this.changelogPath = path.join(process.cwd(), 'CHANGELOG.md');
  }

  getCurrentVersion() {
    const packageJson = JSON.parse(fs.readFileSync(this.packageJsonPath, 'utf8'));
    return packageJson.version;
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
        const commits = execSync('git log --oneline --format="%s"', {
          encoding: 'utf8',
          stdio: ['pipe', 'pipe', 'ignore'],
        });
        return commits.split('\n').filter(Boolean);
      } catch (_err) {
        console.warn('Warning: Could not get git commits, defaulting to patch version');
        return [];
      }
    }
  }

  getChangesSinceLastCommit() {
    try {
      const diff = execSync('git diff --name-only HEAD~1', {
        encoding: 'utf8',
        stdio: ['pipe', 'pipe', 'ignore'],
      });
      return diff.split('\n').filter(Boolean);
    } catch (_error) {
      try {
        const diff = execSync('git ls-files', {
          encoding: 'utf8',
          stdio: ['pipe', 'pipe', 'ignore'],
        });
        return diff.split('\n').filter(Boolean);
      } catch (_err) {
        console.warn('Warning: Could not get git diff, defaulting to patch version');
        return [];
      }
    }
  }

  analyzeCommits(commits) {
    let hasBreaking = false;
    let hasFeature = false;
    let hasFix = false;

    const conventionalPatterns = {
      breaking:
        /^(?:feat|fix|perf|refactor|style|test|chore|docs|ci|build|revert)(?:\(.+\))?!: .+/,
      feature: /^(?:feat)(?:\(.+\))?: .+/,
      fix: /^(?:fix|perf)(?:\(.+\))?: .+/,
    };

    for (const commit of commits) {
      if (conventionalPatterns.breaking.test(commit)) {
        hasBreaking = true;
      } else if (conventionalPatterns.feature.test(commit)) {
        hasFeature = true;
      } else if (conventionalPatterns.fix.test(commit)) {
        hasFix = true;
      }
    }

    if (hasBreaking) {
      return 'major';
    }
    if (hasFeature) {
      return 'minor';
    }
    if (hasFix) {
      return 'patch';
    }

    return 'patch';
  }

  analyzeFileChanges(files) {
    let hasBreaking = false;
    let hasFeature = false;
    let hasFix = false;

    for (const file of files) {
      if (file.includes('BREAKING_CHANGES') || file.includes('migration') || file.includes('upgrade')) {
        hasBreaking = true;
      }

      if (
        file.includes('src/') &&
        !file.includes('test/') &&
        (file.includes('new') || file.includes('add') || file.includes('feature'))
      ) {
        hasFeature = true;
      }

      if (file.includes('fix') || file.includes('bug') || file.includes('patch')) {
        hasFix = true;
      }
    }

    if (hasBreaking) {
      return 'major';
    }
    if (hasFeature) {
      return 'minor';
    }
    if (hasFix) {
      return 'patch';
    }

    return 'patch';
  }

  checkForBreakingChanges() {
    try {
      const sourceFiles = execSync('find src -name "*.ts" -type f', {
        encoding: 'utf8',
        stdio: ['pipe', 'pipe', 'ignore'],
      })
        .split('\n')
        .filter(Boolean);

      for (const file of sourceFiles) {
        const content = fs.readFileSync(file, 'utf8');
        if (
          content.includes('BREAKING CHANGE') ||
          content.includes('@deprecated') ||
          content.includes('TODO: Remove in next major')
        ) {
          return true;
        }
      }
    } catch (_error) {
      return false;
    }

    return false;
  }

  determineBumpType() {
    const commits = this.getCommitsSinceLastTag();
    const files = this.getChangesSinceLastCommit();

    if (this.checkForBreakingChanges()) {
      return 'major';
    }

    const commitBump = this.analyzeCommits(commits);
    const fileBump = this.analyzeFileChanges(files);
    const bumpTypes = ['patch', 'minor', 'major'];

    return bumpTypes[Math.max(bumpTypes.indexOf(commitBump), bumpTypes.indexOf(fileBump))];
  }

  bumpVersion(bumpType) {
    console.log(`Bumping version (${bumpType})...`);
    const result = execSync(`npm version ${bumpType} --no-git-tag-version`, { encoding: 'utf8' });
    const newVersion = result.trim().replace('v', '');
    console.log(`Version bumped to ${newVersion}`);
    return newVersion;
  }

  updateChangelog() {
    console.log('Updating changelog...');
    execSync('node scripts/update-changelog.js', { stdio: 'inherit' });
  }

  run() {
    if (!fs.existsSync(this.changelogPath)) {
      console.error('CHANGELOG.md not found. Create it before running version:auto.');
      process.exit(1);
    }

    const currentVersion = this.getCurrentVersion();
    const bumpType = this.determineBumpType();

    console.log(`Current version: ${currentVersion}`);
    console.log(`Determined bump type: ${bumpType}`);

    this.bumpVersion(bumpType);
    this.updateChangelog();
  }
}

if (require.main === module) {
  new VersionBumper().run();
}

module.exports = VersionBumper;
