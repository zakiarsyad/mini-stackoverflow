

const { verifyToken } = require('../helpers/jwt')
const Question = require('../models/question')
const Answer = require('../models/answer')

function authentication(req, res, next) {
    const { token } = req.headers

    try {
        req.decode = verifyToken(token)
        next()
    } catch (err) { next({ status: 403, message: `Please login first` }) }
}

function questionAuth(req, res, next) {
    const questionId = req.params.id
    const { userId } = req.decode

    Question.findOne({ _id: questionId })
        .then(question => {
            if (question) {
                if (question.userId == userId) next()
                else next({ status: 401, message: `You are not authorized` })
            } else next({ status: 404, message: `question id is invalid` })
        })
        .catch(next)
}

function answerAuth(req, res, next) {
    const answerId = req.params.id
    const { userId } = req.decode

    Answer.findOne({ _id: answerId })
        .then(answer => {
            if (answer) {
                if (answer.userId == userId) next()
                else next({ status: 401, message: `You are not authorized` })
            } else next({ status: 404, message: `answer id is invalid` })
        })
        .catch(next)
}

module.exports = { authentication, questionAuth, answerAuth }