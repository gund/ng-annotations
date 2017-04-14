const fs = require('fs');
const copyDir = require('copy-dir');
const copyfiles = require('copyfiles');
const package = require('../package.json');

delete package.devDependencies;
delete package.config;
delete package.scripts;

fs.writeFileSync('dist/package.json', JSON.stringify(package, null, '  '));
console.log('package.json written to dist');

copyfiles([
  'README.MD',
  'LICENSE',
  'yarn.lock',
  'dist' // Destinantion
], {}, () => null);
console.log('Other files copied to dist');

// Need .git in publishing folder
copyDir.sync('.git', 'dist/.git');
console.log('.git folder copied to dist');
