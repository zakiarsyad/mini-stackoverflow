
const Question = require('../models/question')
const Answer = require('../models/answer')

class QuestionController {
    static getAll (req, res, next) {
        Question.find().populate({path: 'answer', populate: {path: 'userId', model:'User'}}).populate('userId').sort({ updatedAt: -1})
            .then(questions => {
                res.status(200).json(questions)
            })
            .catch(next)
    }

    static create (req, res, next) {
        const { userId } = req.decode
        const { title, description, tags } = req.body

        Question.create({ title, description, userId, tags })
            .then(question => {
                res.status(201).json(question)
            })
            .catch(next)
    }

    static getById (req, res, next) {
        const { id } = req.params

        Question.findById(id).populate({ path: 'answer', populate: { path: 'userId', model: 'User' } }).populate('userId')
            .then(question => {
                res.status(200).json(question)
            })
            .catch(next)
    }

    static upvote (req, res, next) {
        const { id } = req.params
        const { userId } = req.decode

        Question.findById(id)
            .then(question => {
                if (!question.upvote.includes(userId)) {
                    if (question.downvote.includes(userId))
                        question.downvote.splice(question.downvote.indexOf(userId), 1)
                    question.upvote.push(userId)
                }
                return question.save()
            })
            .then(question => {
                res.status(200).json(question)
            })
            .catch(next)
    }

    static downvote (req, res, next) {
        const { id } = req.params
        const { userId } = req.decode

        Question.findById(id)
            .then(question => {
                if (!question.downvote.includes(userId)) {
                    if (question.upvote.includes(userId))
                        question.upvote.splice(question.downvote.indexOf(userId), 1)
                    question.downvote.push(userId)
                }
                return question.save()
            })
            .then(question => {
                res.status(200).json(question)
            })
            .catch(next)
    }

    static getAnswers (req, res, next) {
        const { id } = req.params
        const { userId } = req.decode

        Answer.find({
            $and: [
                { _id: id },
                { userId }
            ]
        })
            .then(questions => {
                res.status(200).json(questions)
            })
            .catch(next)
    }

    static update(req, res, next) {
        const { id } = req.params
        const { title, description } = req.body

        Question.findById(id)
            .then(question => {
                if (title) question.title = title
                if (description) question.description = description
                return question.save()
            })
            .then(question => {
                res.status(200).json(question)
            })
            .catch(next)
    }

    static delete(req, res, next) {
        const { id } = req.params
        let deletedQuestion

        Question.findById(id)
            .then(question => {
                deletedQuestion = question
                return question.delete()
            })
            .then(() => {
                return Answer.deleteMany({ questionId: id })
            })
            .then(() => {
                res.status(200).json(deletedQuestion)
            })
            .catch(next)
    }

    static search(req, res, next) {
        const keyword = req.params.keyword.toLowerCase()

        Question.find({ tags: { $regex: keyword, $options: 'i' } })
            .then(questions => {
                res.status(200).json(questions)
            })
            .catch(next)        
    }
}

module.exports = QuestionController