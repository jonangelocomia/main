const path = require('path');

const ConversationController = require('./api/conversation');
const DialogueController = require('./api/dialogue');
const BotController = require('./api/bot');

module.exports = function(app){
  app.use('/api/dialogue', DialogueController);
  app.use('/api/conversation', ConversationController);
  app.use('/api/bot', BotController);

  app.route('/***')
    .get(function(req, res) {
      res.sendFile(path.resolve(__dirname, '..', 'dist', 'index.html'));
    });
}
