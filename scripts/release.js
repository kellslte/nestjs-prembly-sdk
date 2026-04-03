#!/usr/bin/env node

const { spawnSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const validBumps = new Set(['patch', 'minor', 'major', 'auto']);
const bumpType = process.argv[2];

if (!validBumps.has(bumpType)) {
  console.error('Usage: node scripts/release.js <patch|minor|major|auto>');
  process.exit(1);
}

const packageJsonPath = path.join(process.cwd(), 'package.json');

function run(command, args) {
  const result = spawnSync(command, args, {
    cwd: process.cwd(),
    stdio: 'inherit',
    shell: false,
  });

  if (result.status !== 0) {
    process.exit(result.status ?? 1);
  }
}

function readVersion() {
  return JSON.parse(fs.readFileSync(packageJsonPath, 'utf8')).version;
}

function getBin(name) {
  return process.platform === 'win32' ? `${name}.cmd` : name;
}

const npmBin = getBin('npm');
const gitBin = getBin('git');
const versionScript = bumpType === 'auto' ? 'version:auto' : `version:${bumpType}`;

run(npmBin, ['run', versionScript]);
run(npmBin, ['run', 'build']);
run(npmBin, ['test']);

run(gitBin, ['add', '.']);

const version = readVersion();
const releaseCommitMessage = `chore(release): v${version}`;
const releaseTag = `v${version}`;

run(gitBin, ['commit', '-m', releaseCommitMessage]);
run(gitBin, ['tag', releaseTag]);

console.log(`Release prepared for ${releaseTag}`);
