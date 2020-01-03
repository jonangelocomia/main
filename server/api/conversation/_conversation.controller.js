const mongoose = require('mongoose');
const Conversation = mongoose.model('Conversation');

exports.index = (req, res) => {
  Conversation.find({}, null, { sort:{ _id: 1 } }, (err, data) => {
    if (!err) res.json({ flag: "data", data });
    else res.json({ flag: "err", err });
  });
};
exports.desc = (req, res) => {
  Conversation.find({}, null, { sort:{ _id: -1 } }, (err, data) => {
    if (!err) res.json({ flag: "data", data });
    else res.json({ flag: "err", err });
  });
};
exports.paginated = (req, res) => {
  Conversation.find({}, null, { sort:{ _id: 1 } }, (err, data) => {
    if (!err) res.json({ flag: "data", data });
    else res.json({ flag: "err", err });
  }).skip(parseInt(req.params.size * (req.params.page - 1))).limit(parseInt(req.params.size));
};
exports.paginatedDesc = (req, res) => {
  Conversation.find({}, null, { sort:{ _id: -1 } }, (err, data) => {
    if (!err) res.json({ flag: "data", data });
    else res.json({ flag: "err", err });
  }).skip(parseInt(req.params.size * (req.params.page - 1))).limit(parseInt(req.params.size));
};
exports.single = (req, res) => {
  Conversation.findById(req.params.id, (err, data) => {
    if (!err) res.json({ flag: "data", data });
    else res.json({ flag: "err", err });
  });
};
exports.create = (req, res) => {
  var conversation = new Conversation();
  conversation.session = req.body.session;
  conversation.status = req.body.status;
  conversation.save((err, data) => {
    if (!err) res.json({ flag: "data", data });
    else res.json({ flag: "err", err });
  });
};
exports.update = (req, res) => {
  Conversation.findById(req.params.id, (err, data) => {
    if (err) res.json({ flag: "err", err });
    else {
      if (data) {
        Conversation.updateOne({ _id: data._id }, req.body, { new: true }, (err, data) => {
          if (!err) res.json({ flag: "data", data });
          else res.json({ flag: "err", err });
        });
      } else {
        res.json({ flag: "err", message: "no data" });
      }
    }
  });
};
exports.delete = (req, res) => {
  Conversation.findById(req.params.id, (err, data) => {
    if (err) res.json({ flag: "err", err });
    else {
      if (data) {
        Conversation.deleteOne({ _id: data._id }, (err, data) => {
          if (!err) res.json({ flag: "data", data });
          else res.json({ flag: "err", err });
        });
      } else {
        res.json({ flag: "err", message: "no data" });
      }
    }
  });
};
