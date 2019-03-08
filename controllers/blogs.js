const blogRouter = require('express').Router()
const Blog = require('../models/blog')
const User = require('../models/user')
const Comment = require('../models/comment')
const jwt = require('jsonwebtoken')

blogRouter.get('/', async (request, response) => {
  const blogs = await Blog
    .find({})
    .populate('user', {id: 1, username: 1})
  response.status(200).json(blogs.map(Blog.format))
})

blogRouter.get('/:id', async (request, response) => {
    try {
      const blog = await Blog.findById(request.params.id).populate('user', {id: 1, username: 1})
      if (blog) {
        response.json(blog)
    } else {
        response.status(404).end()
      }
    } catch (exception) {
      response.status(400).send({ error: 'malformatted id' })
    }
})

blogRouter.delete('/:id', async (request, response) => {
  const body = request.body
  if(!body.token) return response.status(401).json({ error: 'token missing' })
  try {
    const decodedToken = jwt.verify(body.token, process.env.SECRET)
    if (!decodedToken.id) return response.status(400).json({ error: 'invalid token' })
    const blog = await Blog.findById(request.params.id).populate('user', {id: 1, username: 1})
    const userId = blog.user._id.toString()
    if(userId !== decodedToken.id) {
      return response.status(401).json({ error: 'Unauthorized'})
    }

    await Blog.findByIdAndDelete(blog._id)
    const user = await User.findById(userId)
    console.log(user)
    const newBlogs = user.blogs.filter(b => b.toString() !== blog._id.toString())
    user.blogs = newBlogs
    console.log('newBlogs: ',newBlogs)
    await User.findOneAndUpdate({_id: userId }, user, {new: true})
    response.status(200).json(Blog.format(blog))
  } catch (exception) {
    console.log(exception)
    response.status(400).send({ error: exception.name })
  }
})

blogRouter.post('/', async (request, response) => {
  const body = request.body
  try {
    const decodedToken = jwt.verify(body.token, process.env.SECRET)
    if (!body.token || !decodedToken.id) {
      return response.status(401).json({ error: 'token missing or invalid' })
    }
    if (body.title === undefined || body.author === undefined) {
      return response.status(400).json({ error: 'bad request' })
    }
    const user = await User.findById(decodedToken.id)
    console.log(user)
    const blog = new Blog({
      title: body.title,
      author: body.author,
      url: body.url,
      likes: body.likes ? body.likes : 0,
      comments: [],
      user: user._id,
    })

    const savedBlog = await blog.save()
    user.blogs = user.blogs.concat(savedBlog._id)
    await user.save()
    const res = await Blog.findById(savedBlog._id).populate('user', {id: 1, username: 1})
    console.log('tallennettu: ', res)
    response.status(200).json(Blog.format(res))
  } catch (exception) {
    if (exception.name === 'JsonWebTokenError') {
      console.log(exception)
      response.status(401).json({ error: exception.message })
    } else {
      console.log(exception)
      response.status(500).json({ error: 'something went wrong...' })
    }
  }
})

blogRouter.put('/:id/comment', async (request, response) => {
  const body = request.body
  try {
    const decodedToken = jwt.verify(body.token, process.env.SECRET)
    if (!body.token || !decodedToken.id) {
      return response.status(401).json({ error: 'token missing or invalid' })
    }
    if (body.comment === undefined) {
      return response.status(400).json({ error: 'bad request' })
    }
    const user = await User.findById(decodedToken.id)
    const blog = await Blog.findById(request.params.id)
    const comment = new Comment({
      content: body.comment,
      userId: user._id,
      username: user.username
    })
    blog.comments.push(comment)
    const commentedBlog = await Blog.findByIdAndUpdate(request.params.id, blog, { new: true } ).populate('user', {id: 1, username: 1})
    response.status(200).json(Blog.format(commentedBlog))
  } catch (error) {
    console.log(error.name)
    return response.status(400).send({ error: 'malformatted blog id or user token' })
  }
})

blogRouter.put('/:id/like', async (request, response) => {
  console.log(request.params.id)
  try {
    const blog = await Blog.findById(request.params.id)
    blog.likes++
    const likedBlog = await Blog.findByIdAndUpdate(request.params.id, blog, { new: true } ).populate('user', {id: 1, username: 1})
    response.status(200).json(Blog.format(likedBlog))
  } catch(error) {
      console.log(error)
      return response.status(400).send({ error: 'malformatted id' })
    }
})

module.exports = blogRouter