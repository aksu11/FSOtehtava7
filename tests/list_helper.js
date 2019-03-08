const Blog = require('../models/blog')

const blogsForTesting = [
    {
      _id: "5a422a851b54a676234d17f7",
      title: "React patterns",
      author: "Michael Chan",
      url: "https://reactpatterns.com/",
      likes: 7,
      __v: 0
    },
    {
      _id: "5a422aa71b54a676234d17f8",
      title: "Go To Statement Considered Harmful",
      author: "Edsger W. Dijkstra",
      url: "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html",
      likes: 5,
      __v: 0
    },
    {
      _id: "5a422b3a1b54a676234d17f9",
      title: "Canonical string reduction",
      author: "Edsger W. Dijkstra",
      url: "http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html",
      likes: 12,
      __v: 0
    },
    {
      _id: "5a422b891b54a676234d17fa",
      title: "First class tests",
      author: "Robert C. Martin",
      url: "http://blog.cleancoder.com/uncle-bob/2017/05/05/TestDefinitions.htmll",
      likes: 10,
      __v: 0
    },
    {
      _id: "5a422ba71b54a676234d17fb",
      title: "TDD harms architecture",
      author: "Robert C. Martin",
      url: "http://blog.cleancoder.com/uncle-bob/2017/03/03/TDD-Harms-Architecture.html",
      likes: 0,
      __v: 0
    },
    {
      _id: "5a422bc61b54a676234d17fc",
      title: "Type wars",
      author: "Robert C. Martin",
      url: "http://blog.cleancoder.com/uncle-bob/2016/05/01/TypeWars.html",
      likes: 2,
      __v: 0
    }  
]

// *******************************************************************************

const dummy = (blogs) => {
    console.log('dummy-blogit', blogs)
    return 1
}
const totalLikes = (blogs) => {
    const likes = blogs.map(blog => blog.likes)
    const reducer = (accumulator, currentValue) => accumulator + currentValue
    return likes.reduce(reducer)
}
const favouriteBlog = (blogs) => {
    let obj = {"likes": 0}
    blogs.map(blog => blog.likes > obj.likes ? obj = blog : obj = obj)
    return obj
}
const mostBlogs = (blogs) => {
    let arr = []
    let names = []
    blogs.map(blog => {
        if(arr[blog.author] === undefined) arr[blog.author] = 1
        else arr[blog.author]++
        if(!names.includes(blog.author)) names.push(blog.author)
    })
    let help = 0
    let obj = {author: '', blogs : 0}
    names.map(name => {
        if(arr[name] > help){
            help = arr[name]
            obj.author = name
            obj.blogs = help
        }
    })
    return obj
}
  
// ********************************************************************

const blogsInDb = async () => {
    const blogs = await Blog.find({})
    return blogs.map(Blog.format)
}

const nonExistingId = async () => {
    const blog = new Blog()
    await blog.save()
    await blog.remove()
    console.log('nonExistingId:', blog._id)
    return blog._id.toString()
}


module.exports = {
    dummy, totalLikes, blogsForTesting, favouriteBlog, mostBlogs, blogsInDb, nonExistingId
}
  