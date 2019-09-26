
const router = require('express').Router()
const AnswerController = require('../controllers/answer')
const { authentication, answerAuth } = require('../middlewares/auth')

router.get('/:id', AnswerController.getAnswer)

router.use(authentication)
router.post('/', AnswerController.create)
router.patch('/:id/upvote', AnswerController.upvote)
router.patch('/:id/downvote', AnswerController.downvote)

router.use('/:id', answerAuth)
router.patch('/:id', AnswerController.update)
router.delete('/:id', AnswerController.delete)

module.exports = router