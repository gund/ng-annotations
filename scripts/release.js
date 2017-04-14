const fs = require('fs');
const package = require('../package.json');

delete package.devDependencies;
delete package.config;
delete package.scripts;

fs.writeFileSync('dist/package.json', JSON.stringify(package, null, '  '));
