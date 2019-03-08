const bcrypt = require('bcryptjs')
const userRouter = require('express').Router()
const User = require('../models/user')

userRouter.get('/', async (request, response) => {
    const users = await User.find({})
      .populate('blogs', {title: 1, author: 1})
    response.status(200).json(users.map(User.format))
})

userRouter.post('/', async (request, response) => {
    try {
      const body = request.body
      console.log(body)
      if(body.password.length < 3) return response.status(400).json({error: 'password length must be 3 characters'})
      if(body.adult === undefined) body.adult = true
  
      const existingUser = await User.find({ username: body.username })
      if (existingUser.length > 0) {
        return response.status(400).json({ error: 'username must be unique' })
      }
  
      const saltRounds = 10
      const passwordHash = await bcrypt.hash(body.password, saltRounds)

      const user = new User({
        name: body.name,
        username: body.username,
        passwordHash: passwordHash,
        adult: body.adult
      })
  
      const savedUser = await user.save()
  
      response.json(User.format(savedUser))
    } catch (exception) {
        console.log(exception)
        response.status(500).json({ error: 'something went wrong...' })
      }
})

module.exports = userRouter