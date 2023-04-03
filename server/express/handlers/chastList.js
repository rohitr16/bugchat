const fs = require('fs');
const path = require('path');
const jsonPath = path.join(
  __dirname,
  '..',
  '..',
  'response',
  'chatshistory.json',
);

module.exports = function (req, res) {
  const read = fs.readFileSync(jsonPath);
  const data = JSON.parse(read);
  res.send(data);
};
