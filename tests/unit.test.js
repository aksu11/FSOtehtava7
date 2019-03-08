const listHelper = require('./list_helper')

describe.skip('dummy test', () => {
    test('dummy is called', () => {
        const blogs = []
        const result = listHelper.dummy(blogs)
        expect(result).toBe(1)
    })
})

describe.skip('total likes', () => {
    test('counting total likes', () => {
        const blogs = listHelper.blogsForTesting
        const result = listHelper.totalLikes(blogs)
        expect(result).toBe(36)
    })
})

describe.skip('most blogs', () => {
    test('searching most prolific writer', () => {
        const blogs = listHelper.blogsForTesting
        const result = listHelper.mostBlogs(blogs)
        expect(result).toEqual({ author: 'Robert C. Martin', blogs: 3 })
    })
})

describe.skip('most likes', () => {
    test('searching most famous blog', () => {
        const blogs = listHelper.blogsForTesting
        const result = listHelper.favouriteBlog(blogs)
        expect(result).toEqual(blogs[2])
    })
})


