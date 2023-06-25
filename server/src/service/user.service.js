const { createUserDB, getUserDB, getUserIDDB, deleteUserDB } = require('../repository/user.repositiry')

async function getUser() {
    return await getUserDB()
}
async function getUserID(id) {
    return await getUserIDDB(id)
}

async function createUser(name, surname, email, pwd, role) {
    const user = await createUserDB(name, surname, email, pwd, role)
    return user
}

async function deleteUser(id) {
    const user = await deleteUserDB(id)
    return user
}


module.exports = { createUser, getUser, getUserID, deleteUser }
