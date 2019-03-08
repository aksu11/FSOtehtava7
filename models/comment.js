const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
    id: String,
    content: String,
    userId: String,
    username: String
})

commentSchema.statics.format = (comment) => {
    return {
        id: comment._id,
        content: comment.content,
        userId: comment.userId,
        username: comment.username
    }
}

const Comment = mongoose.model('Comment', commentSchema)

module.exports = Comment