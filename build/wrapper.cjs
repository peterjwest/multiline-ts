const moduleImport = require('./es5/index.cjs');
module.exports = Object.assign(moduleImport.default, moduleImport);
