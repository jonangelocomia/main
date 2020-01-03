const express = require('express');
const BotController = require('./_bot.controller');

const router = express.Router();

router.route('/')
  .get( BotController.index );
router.route('/session/create')
  .get( BotController.sessionCreate );
router.route('/session/:session/delete/')
  .get( BotController.sessionDelete );
router.route('/message/')
  .post( BotController.message );

module.exports = router;
