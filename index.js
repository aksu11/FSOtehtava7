const http = require('http')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
// const cors = require('cors')
const mongoose = require('mongoose')
mongoose.set('useFindAndModify', false)
const config = require('./utils/config')
const blogRouter = require('./controllers/blogs')
const userRouter = require('./controllers/users')
const loginRouter = require('./controllers/login')
const middleware = require('./utils/middleware')
const history = require('connect-history-api-fallback')

const mongoUrl = config.mongoUrl
mongoose
	.connect(mongoUrl, {useNewUrlParser: true})
	.then( () => {
		console.log('connected to database', config.mongoUrl)
	})
	.catch( err => {
		console.log(err)
	})


app.use(history())
app.use(express.static('dist'))
// app.use(cors())
app.use(bodyParser.json())
app.use(middleware.logger)
app.use(middleware.tokenExtractor)
app.use('/api/blogs', blogRouter)
app.use('/api/users', userRouter)
app.use('/api/login', loginRouter)
app.use(middleware.error)

const server = http.createServer(app)

server.listen(config.port, () => {
	console.log(`Server running on port ${config.port}`)
})

server.on('close', () => {
	mongoose.connection.close()
})

module.exports = {
	app, server
}
