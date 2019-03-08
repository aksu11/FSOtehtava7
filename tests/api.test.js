const supertest = require('supertest')
const { app, server } = require('../index')
const api = supertest(app)
const Blog = require('../models/blog')
const {blogsForTesting, blogsInDb, nonExistingId} = require('./list_helper')

describe('when there is initially some blogs saved', async () => {
  beforeAll(async () => {
    await Blog.remove({})

    const blogs = blogsForTesting.map(b => new Blog(b))
    await Promise.all(blogs.map(b => b.save()))
  })

  test('all blogs are returned as json by GET /api/notes', async () => {
    const blogs = await blogsInDb()

    const response = await api
      .get('/api/blogs')
      .expect(200)
      .expect('Content-Type', /application\/json/)

    expect(response.body.length).toBe(blogs.length)

    const returnedTitles = response.body.map(b => b.title)
    blogs.forEach(blog => {
      expect(returnedTitles).toContain(blog.title)
    })
  })

  test('individual blogs are returned as json by GET /api/notes/:id', async () => {
      const blogsInDatabase = await blogsInDb()
      const aBlog = blogsInDatabase[0]
      const response = await api
        .get(`/api/blogs/${aBlog.id}`)
        .expect(200)
        .expect('Content-Type', /application\/json/)

      expect(response.body.title).toBe(aBlog.title)
  })

  test('404 returned by GET /api/blogs/:id with nonexisting valid id', async () => {
    const validNonexistingId = await nonExistingId()

    await api
      .get(`/api/blogs/${validNonexistingId}`)
      .expect(404)
  })

  test('400 is returned by GET /api/blogs/:id with invalid id', async () => {
    const invalidId = '5a3d5da59070081a82a3445'

    await api
      .get(`/api/blogs/${invalidId}`)
      .expect(400)
  })

  describe('addition of a new blog', async () => {

    test.skip('POST /api/blogs succeeds without likes property', async () => {

      const newBlog =     {
        title: "Otsikko",
        author: "Hessu Hopo",
        url: "www.google.fi"
      } 

      await api.post('/api/blogs').send(newBlog).expect(201).expect('Content-Type', /application\/json/)
      const blogsAfterOperation = await blogsInDb()
      const savedBlog = blogsAfterOperation.find(blog => blog.title === 'Otsikko')
      expect(savedBlog.likes).toBe(0)
    })

    test('POST /api/blogs fails with proper statuscode if title or author is missing', async () => {

      const blogsAtStart = await blogsInDb()
      
      const badBlog = {
        title: "Otsikko",
        url: "www.google.fi",
        likes: 5
      }
      const badBlog2 = {
        author: "Hessu Hopo",
        url: "www.google.fi",
        likes: 7
      }

      await api.post('/api/blogs').send(badBlog).expect(400)
      await api.post('/api/blogs').send(badBlog2).expect(400)
      const blogsAfterOperation = await blogsInDb()
      expect(blogsAfterOperation.length).toBe(blogsAtStart.length)
    })
  })

  describe('deletion of a blog', async () => {

    test('DELETE /api/blogs/:id succeeds with proper statuscode', async () => {
      const blogsAtStart = await blogsInDb()
      const blogToDelete = blogsAtStart[blogsAtStart.length-1]

      await api.delete(`/api/blogs/${blogToDelete.id}`).expect(204)

      const blogsAfterOperation = await blogsInDb()
      const titles = blogsAfterOperation.map(blog => blog.title)
      expect(titles).not.toContain(blogToDelete.title)
      expect(blogsAfterOperation.length).toBe(blogsAtStart.length - 1)
    })
  })

  describe.only('liking a blog', async () => {

    test.only('PUT /api/blogs/:id succeeds when liked', async () => { 
        const blogsAtStart = await blogsInDb()
        const blogToLike = blogsAtStart[0]
        const likes = blogToLike.likes

        await api.put(`/api/blogs/${blogToLike.id}`).expect(200).expect('Content-Type', /application\/json/)

        const blogsAfterOperation = await blogsInDb()
        const firstBlog = blogsAfterOperation[0]
        console.log(firstBlog)
        expect(firstBlog.likes).toBe(likes+1)
    })
  })

  afterAll(() => {
    server.close()
  })

})
