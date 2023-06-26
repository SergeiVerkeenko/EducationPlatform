const { pool } = require('../DB')

async function getCourseDB() {
    const client = await pool.connect()
    const sql = 'SELECT * FROM courses'
    const result = (await client.query(sql)).rows
    return result

}

async function getCourseIDDB(id) {
    const client = await pool.connect()
    const sql = 'SELECT * FROM courses WHERE id=$1'
    const result = (await client.query(sql, [id])).rows
    return result
}

async function createCourseDB(title) {
    const client = await pool.connect()
    try {
        await client.query('BEGIN')
        const sql = 'INSERT INTO courses (title) VALUES ($1) RETURNING *'
        const result = (await client.query(sql, [title])).rows
        await client.query('COMMIT')
        return result
    } catch (error) {
        await client.query('ROLLBACK')
        console.log(`createCourseDB: ${error.message}`);
        return []
    }
}

async function deleteCourseDB(id) {
    const client = await pool.connect();
    try {
        await client.query('BEGIN');
        const sql = `DELETE FROM courses WHERE id=$1 RETURNING *`;
        const data = (await client.query(sql, [id])).rows;
        await client.query('COMMIT');
        return data;
    } catch (error) {
        await client.query('ROLLBACK');
        console.log(`deleteCourseDB: ${error.message}`);
        return [];
    }
}

async function updateCourseDB(id, title) {
    const client = await pool.connect()
    try {
        await client.query("BEGIN")
        const sql = "UPDATE courses SET title=$1 WHERE id=$2 RETURNING *"
        const result = (await client.query(sql, [title, id])).rows
        await client.query("COMMIT")
        return result
    } catch (error) {
        await client.query("ROLLBACK")
        console.log(`updateCourseDB: ${error.message}`)
        return []
    }
}

module.exports = { createCourseDB, getCourseDB, updateCourseDB, getCourseIDDB, deleteCourseDB }