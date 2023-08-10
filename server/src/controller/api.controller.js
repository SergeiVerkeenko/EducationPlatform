const express = require('express')
const route = express.Router()
const { registrationUser, authorizationUser } = require('../service/api.service')

route.post('/reg', async function (req, res) {
    try {
        const { name, surname, email, pwd, role } = req.body
        const api = await registrationUser(name, surname, email, pwd, role)
        res.status(200).send(api)
    } catch (error) {
        res.status(404).send(error.message)
    }
})

route.post('/auth', async function (req, res) {
    try {
        const { email, pwd } = req.body
        const api = await authorizationUser(email, pwd)
        res.status(200).send(api)
    } catch (error) {
        res.status(404).send(error.message)
    }
})

module.exports = route