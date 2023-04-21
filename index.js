const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 5000
const categories = require('./data/categories.json')
const news = require(`./data/news.json`)
app.use(cors())
app.get('/', (req, res) => {
    res.send(`Dragon is running`)
})
app.get('/categories', (req, res) => {
    res.send(categories)
})
app.get('/news', (req, res) => {
    res.send(news)
})
app.get('/news/:id', (req, res) => {
    const id = req.params.id
    const selectedNews = news.find(e => e._id == id)
    res.send(selectedNews)
})
app.get('/categories/:id', (req, res) => {
    const id = req.params.id
    if (id == 0) {
        res.send(news)
    }
    else {
        const selectedCategoryNews = news.filter(e => e.category_id === id)
        res.send(selectedCategoryNews)
    }

})
app.listen(port, () => {
    console.log(`Dragon Api is running on Port:${port}`)
})