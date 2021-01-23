const fs = require('fs');
const { parse } = require('path');
module.exports = JSON.parse(fs.readFileSync(`${__dirname}/productsDataBase.json`, 'utf8'));