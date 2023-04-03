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
  const { name, history } = req.body;
  data.forEach((item) => {
    if (item.name === name) {
      item.history = history;
    }
  });
  fs.writeFileSync(
    jsonPath,
    JSON.stringify(data, null, 2),
    function writeJSON(err) {
      if (err) return console.log(err);
      console.log(JSON.stringify(data));
      console.log('writing to ' + jsonPath);
    },
  );
  res.send(data);
};
