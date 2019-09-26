
const mongoose = require('mongoose')
const { Schema } = mongoose

const questionSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    title: {
        type: String,
        required: [true, 'title is required']
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
    answer: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Answer'
        }
    ],
    tags: [{
        type: String,
    }]
}, { timestamps: true })

module.exports = mongoose.model('Question', questionSchema)