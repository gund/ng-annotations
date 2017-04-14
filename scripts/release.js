const fs = require('fs');
const copyDir = require('copy-dir');
const package = require('../package.json');

delete package.devDependencies;
delete package.config;
delete package.scripts;

fs.writeFileSync('dist/package.json', JSON.stringify(package, null, '  '));

// Need .git in publishing folder
copyDir.sync('.git', 'dist/.git');
