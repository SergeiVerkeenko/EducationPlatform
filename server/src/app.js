const cors = require('cors')

const express = require('express')

const bodyParser = require('body-parser')

const user = require('./controller/user.controller')
const course = require('./controller/course.controller')
const api = require('./controller/api.controller')

const app = express()

app.use(cors())

app.use(bodyParser.json())

app.use('/user', user)
app.use('/course', course)
app.use('/api', api)

app.use((error, req, res, next) => {
    res.send(error.message)
})

module.exports = app