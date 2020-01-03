const express = require('express');
const DialogueController = require('./_dialogue.controller');

const router = express.Router();

router.route('/')
  .get( DialogueController.index );
router.route('/desc/')
  .get( DialogueController.desc );
router.route('/page/:page/size/:size')
  .get( DialogueController.paginated );
router.route('/page/:page/size/:size/desc/')
  .get( DialogueController.paginatedDesc );
router.route('/conversation/:conversation')
  .get( DialogueController.conversationized );
router.route('/conversation/:conversation/desc/')
  .get( DialogueController.conversationizedDesc );
router.route('/page/:page/size/:size/conversation/:conversation')
  .get( DialogueController.paginatedConversationized );
router.route('/page/:page/size/:size/conversation/:conversation/desc/')
  .get( DialogueController.paginatedConversationizedDesc );
router.route('/:id')
  .get( DialogueController.single );
router.route('/create/')
  .post( DialogueController.create );
router.route('/update/:id')
  .post( DialogueController.update );
router.route('/delete/:id')
  .post( DialogueController.delete );

module.exports = router;
