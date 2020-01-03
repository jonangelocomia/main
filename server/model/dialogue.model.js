const mongoose = require('mongoose');

var dialogueSchema = new mongoose.Schema({
  from: { type: String },
  to: { type: String },
  message: { type: String },
  type: { type: String }, // text, html, link, image
  status: { type: String }
}, { timestamps: true });

mongoose.model('Dialogue', dialogueSchema);
