// imports

require('dotenv').config()

const express = require('express')
const cors = require('cors')
const port = process.env.PORT || 5000

// const mongoose = require('mongoose')

const app = express()

//middleware

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const posts = require('./routes/api/posts')

app.use('/api/posts', posts)
// database connection

// run server

app.listen(port, () => {
  console.log(`server running at ${port}`)
})
