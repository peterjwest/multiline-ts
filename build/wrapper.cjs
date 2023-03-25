const moduleImport = require('./code/index.cjs');
module.exports = Object.assign(moduleImport.default, moduleImport);
