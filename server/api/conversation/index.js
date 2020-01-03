const express = require('express');
const ConversationController = require('./_conversation.controller');

const router = express.Router();

router.route('/')
  .get( ConversationController.index );
router.route('/desc/')
  .get( ConversationController.desc );
router.route('/page/:page/size/:size')
  .get( ConversationController.paginated );
router.route('/page/:page/size/:size/desc/')
  .get( ConversationController.paginatedDesc );
router.route('/:id')
  .get( ConversationController.single );
router.route('/create/')
  .post( ConversationController.create );
router.route('/update/:id')
  .post( ConversationController.update );
router.route('/delete/:id')
  .post( ConversationController.delete );

module.exports = router;
