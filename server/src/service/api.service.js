const {registrationUserDB, getUserByEmailDB} = require('../repository/api.repository')


async function registrationUser(name, surname, email, pwd, role) {
    return await registrationUserDB(name, surname, email, pwd, role)

}
async function authorizationUser(email, pwd) {
    return await getUserByEmailDB(email,pwd)

}



module.exports = { registrationUser,authorizationUser }