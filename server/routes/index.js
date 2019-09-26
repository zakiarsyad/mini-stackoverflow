
const router = require('express').Router()
const questionRoutes = require('./question')
const answerRoutes = require('./answer')
const userRoutes = require('./user')
const { authentication } = require('../middlewares/auth')

router.get('/', (req, res) => {
    res.status(200).json({
        message: `app is running`
    })
})

router.use('/users', userRoutes)

router.use('/questions', questionRoutes)

// router.use(authentication)
router.use('/answers', answerRoutes)

module.exports = router