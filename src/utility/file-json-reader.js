const util = require('util');
const fs = require('fs');
const path = require('path');

const readFile = util.promisify(fs.readFile);

module.exports = function fileReader(filename) {
  const defaultpath = path.join(__dirname, '../', 'Sample', filename);
  return readFile(defaultpath, (err, data) => data);
};
