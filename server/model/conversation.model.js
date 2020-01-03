const mongoose = require('mongoose');

var conversationSchema = new mongoose.Schema({
  session: { type: String },
  status: { type: String }
}, { timestamps: true });

mongoose.model('Conversation', conversationSchema);
