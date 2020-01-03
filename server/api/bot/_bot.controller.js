const uuidv1 = require('uuid/v1');

exports.index = (req, res) => {
  res.json({ flag: "data", message: "hello love" });
};
exports.sessionCreate = (req, res) => {
  res.json({ flag: "data", session: { session_id: uuidv1() } });
};
exports.sessionDelete = (req, res) => {
  res.json({ flag: "data", session: '' });
};
exports.message = (req, res) => {
  res.json({ flag: "data", data: {
    output: {
      generic: [{
        text: 'Sorry i didnt get that...'
      }]
    }
  } });
};