const mongoose = require('mongoose');
const Dialogue = mongoose.model('Dialogue');

exports.index = (req, res) => {
  Dialogue.find({}, null, { sort:{ _id: 1 } }, (err, data) => {
    if (!err) res.json({ flag: "data", data });
    else res.json({ flag: "err", err });
  });
};
exports.desc = (req, res) => {
  Dialogue.find({}, null, { sort:{ _id: -1 } }, (err, data) => {
    if (!err) res.json({ flag: "data", data });
    else res.json({ flag: "err", err });
  });
};
exports.paginated = (req, res) => {
  Dialogue.find({}, null, { sort:{ _id: 1 } }, (err, data) => {
    if (!err) res.json({ flag: "data", data });
    else res.json({ flag: "err", err });
  }).skip(parseInt(req.params.size * (req.params.page - 1))).limit(parseInt(req.params.size));
};
exports.paginatedDesc = (req, res) => {
  Dialogue.find({}, null, { sort:{ _id: -1 } }, (err, data) => {
    if (!err) res.json({ flag: "data", data });
    else res.json({ flag: "err", err });
  }).skip(parseInt(req.params.size * (req.params.page - 1))).limit(parseInt(req.params.size));
};
exports.conversationized = (req, res) => {
  Dialogue.find({ to: req.params.conversation }, null, { sort:{ _id: 1 } }, (err, data) => {
    if (!err) res.json({ flag: "data", data });
    else res.json({ flag: "err", err });
  });
};
exports.conversationizedDesc = (req, res) => {
  Dialogue.find({ to: req.params.conversation }, null, { sort:{ _id: -1 } }, (err, data) => {
    if (!err) res.json({ flag: "data", data });
    else res.json({ flag: "err", err });
  });
};
exports.paginatedConversationized = (req, res) => {
  Dialogue.find({ to: req.params.conversation }, null, { sort:{ _id: 1 } }, (err, data) => {
    if (!err) res.json({ flag: "data", data });
    else res.json({ flag: "err", err });
  }).skip(parseInt(req.params.size * (req.params.page - 1))).limit(parseInt(req.params.size));
};
exports.paginatedConversationizedDesc = (req, res) => {
  Dialogue.find({ to: req.params.conversation }, null, { sort:{ _id: -1 } }, (err, data) => {
    if (!err) res.json({ flag: "data", data });
    else res.json({ flag: "err", err });
  }).skip(parseInt(req.params.size * (req.params.page - 1))).limit(parseInt(req.params.size));
};
exports.single = (req, res) => {
  Dialogue.findById(req.params.id, (err, data) => {
    if (!err) res.json({ flag: "data", data });
    else res.json({ flag: "err", err });
  });
};
exports.create = (req, res) => {
  var dialogue = new Dialogue();
  dialogue.from = req.body.from;
  dialogue.to = req.body.to;
  dialogue.message = req.body.message;
  dialogue.type = req.body.type;
  dialogue.status = req.body.status;
  dialogue.save((err, data) => {
    if (!err) res.json({ flag: "data", data });
    else res.json({ flag: "err", err });
  });
};
exports.update = (req, res) => {
  Dialogue.findById(req.params.id, (err, data) => {
    if (err) res.json({ flag: "err", err });
    else {
      if (data) {
        Dialogue.updateOne({ _id: data._id }, req.body, { new: true }, (err, data) => {
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
  Dialogue.findById(req.params.id, (err, data) => {
    if (err) res.json({ flag: "err", err });
    else {
      if (data) {
        Dialogue.deleteOne({ _id: data._id }, (err, data) => {
          if (!err) res.json({ flag: "data", data });
          else res.json({ flag: "err", err });
        });
      } else {
        res.json({ flag: "err", message: "no data" });
      }
    }
  });
};
