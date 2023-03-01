require('dotenv').config()
require('colors')
const express = require('express')
const path = require('path')

const connectDB = require('./config/db')
const aboutRoute = require('./routes/aboutRoutes')
const contactRoute = require('./routes/contactRoutes')
const projectsRoute = require('./routes/projectsRoutes')
const userRoute = require('./routes/userRoutes')

const app = express()
app.use(express.json())

app.use('/about', aboutRoute)
app.use('/contact', contactRoute)
app.use('/projects', projectsRoute)
app.use('/user', userRoute)

// static files
app.use(express.static(path.join(__dirname, '../build')))

app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, '../build/index.html'))
})

const port = process.env.PORT || 5000

app.listen(port, async () => {
    await connectDB()
    console.log('server started....'.yellow);
})