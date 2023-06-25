const express = require('express')
const { getUser, createUser, getUserID, deleteUser } = require('../service/user.service')
const route = express.Router()

route.get('/', async function (req, res) {
    try {
        const user = await getUser()
        res.status(200).send(user)

    } catch (error) {
        res.status(404).send(error.message)
    }
})

route.get('/:id', async function (req, res) {
    try {
        const { id } = req.params
        const user = await getUserID(id)
        res.status(200).send(user)
    } catch (error) {

    }
})



route.post('/', async function (req, res) {
    try {
        const { name, surname, email, pwd, role } = req.body
        const user = await createUser(name, surname, email, pwd, role)
        res.status(200).send(user)
    } catch (error) {
        res.status(404).send(error.message)
    }
})

route.put('/', async function (req, res) {
    try {
        const { id } = req.params;
        const { name, surname, email, pwd, role } = req.body
        const user = await createUser(id, name, surname, email, pwd, role)
        res.status(200).send(user)
    } catch (error) {
        res.status(404).send(error.message)
    }
})

route.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const user = await deleteUser(id);
        res.status(200).send(user)
    } catch (error) {
        res.status(404).send(error.message)
    }
});

module.exports = route