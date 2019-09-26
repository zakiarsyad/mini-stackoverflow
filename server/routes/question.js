
const router = require('express').Router()
const QuestionController = require('../controllers/question')
const { questionAuth, authentication } = require('../middlewares/auth')

router.get('/', QuestionController.getAll)
router.get('/:id', QuestionController.getById)
router.get('/search/:keyword', QuestionController.search)

router.use(authentication)
router.post('/', QuestionController.create)
router.patch('/:id/upvote', QuestionController.upvote)
router.patch('/:id/downvote', QuestionController.downvote)
router.get('/:id/answer', QuestionController.getAnswers)

router.use('/:id', questionAuth)
router.patch('/:id', QuestionController.update)
router.delete('/:id', QuestionController.delete)

module.exports = router