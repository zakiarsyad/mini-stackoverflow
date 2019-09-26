
const Answer = require('../models/answer')
const Question = require('../models/question')

class AnswerController {
    static create(req, res, next) {
        const { userId } = req.decode
        const { questionId, description } = req.body
        let newAnswer

        Answer.create({ questionId, description, userId })
            .then(answer => {
                newAnswer = answer
                return Question.findOne({ _id: questionId })
            })
            .then(question => {
                question.answer.push(newAnswer._id)
                return question.save()
            })
            .then(() => {
                res.status(201).json(newAnswer)
            })
            .catch(next)
    }

    static getAnswer(req, res, next) {
        const { id } = req.params

        Answer.findById(id).populate('userId')
            .then(answer => {
                res.status(200).json(answer)
            })
            .catch(next)
    }

    static upvote(req, res, next) {
        const { id } = req.params
        const { userId } = req.decode

        Answer.findById(id)
            .then(answer => {
                if (!answer.upvote.includes(userId)) {
                    if (answer.downvote.includes(userId))
                        answer.downvote.splice(answer.downvote.indexOf(userId), 1)
                    answer.upvote.push(userId)
                }
                return answer.save()
            })
            .then(answer => {
                res.status(200).json(answer)
            })
            .catch(next)
    }

    static downvote(req, res, next) {
        const { id } = req.params
        const { userId } = req.decode

        Answer.findById(id)
            .then(answer => {
                if (!answer.downvote.includes(userId)) {
                    if (answer.upvote.includes(userId))
                        answer.upvote.splice(answer.downvote.indexOf(userId), 1)
                    answer.downvote.push(userId)
                }
                return answer.save()
            })
            .then(answer => {
                res.status(200).json(answer)
            })
            .catch(next)
    }

    static update(req, res, next) {
        const { id } = req.params
        const { description } = req.body

        Answer.findById(id)
            .then(answer => {
                answer.description = description
                return answer.save()
            })
            .then(answer => {
                res.status(200).json(answer)
            })
            .catch(next)
    }

    static delete(req, res, next) {
        const { id } = req.params
        let deletedAnswer

        Answer.findById(id)
            .then(answer => {
                deletedAnswer = answer
                return answer.delete()
            })
            .then(() => {
                return Question.findById(deletedAnswer.questionId)
            })
            .then(question => {
                question.answer = question.answer.filter(answerid => answerid != id)
                return question.save()
            })
            .then(() => {
                res.status(200).json(deletedAnswer)
            })
            .catch(next)
    }
}

module.exports = AnswerController