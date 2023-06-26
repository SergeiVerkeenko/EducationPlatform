const { createCourseDB, getCourseDB, updateCourseDB, getCourseIDDB, deleteCourseDB } = require('../repository/course.repository')

async function getCourse() {
    return await getCourseDB()
}
async function getCourseID(id) {
    return await getCourseIDDB(id)
}

async function createCourse(title) {
    const course = await createCourseDB(title)
    return course
}

async function updateCourse(id, title) {
    return await updateCourseDB(id, title)
}

async function deleteCourse(id) {
    const course = await deleteCourseDB(id)
    return course
}


module.exports = { getCourse, createCourse, getCourseID, deleteCourse, updateCourse }
