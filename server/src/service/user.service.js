const { createUserDB, getUserDB,updateUserDB, getUserIDDB, deleteUserDB } = require('../repository/user.repositiry')

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

async function updateUser(id, name, surname, email, pwd, role) {
    return await updateUserDB(id, name, surname, email, pwd, role)
}

async function deleteUser(id) {
    const user = await deleteUserDB(id)
    return user
}


module.exports = { createUser,updateUser, getUser, getUserID, deleteUser }
