const mongoose = require('mongoose')

const blogSchema = new mongoose.Schema({
    id: String,
    title: String,
    author: String,
    url: String,
    likes: Number,
    comments: [],
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
})

blogSchema.statics.format = (blog) => {
    return {
        id: blog._id,
        title: blog.title,
        author: blog.author,
        url: blog.url,
        likes: blog.likes,
        comments: blog.comments,
        user: blog.user
    }
}

const Blog = mongoose.model('Blog', blogSchema)

module.exports = Blog