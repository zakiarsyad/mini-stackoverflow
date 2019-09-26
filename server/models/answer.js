
const mongoose = require('mongoose')
const { Schema } = mongoose

const answerSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    description: {
        type: String,
        required: [true, 'description is required']
    },
    upvote: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    ],
    downvote: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    ],
    questionId: {
        type: Schema.Types.ObjectId,
        ref: 'Question'
    }
}, { timestamps: true })

module.exports = mongoose.model('Answer', answerSchema)