const { pool } = require('../DB')

async function getUserDB() {
    const client = await pool.connect()
        const sql = 'SELECT * FROM USERS'
        const result = (await client.query(sql)).rows
        return result

}

async function getUserIDDB(id) {
    const client = await pool.connect()
        const sql = 'SELECT * FROM users WHERE id=$1'
        const result = (await client.query(sql, [id])).rows
        return result
}

async function createUserDB(name, surname, email, pwd, role) {
    const client = await pool.connect()
    try {
        await client.query('BEGIN')
        const sql = 'INSERT INTO users (name, surname, email, pwd, role) VALUES ($1,$2,$3,$4,$5) RETURNING *'
        const result = (await client.query(sql, [name, surname, email, pwd, role])).rows
        await client.query('COMMIT')
        return result
    } catch (error) {
        await client.query('ROLLBACK')
        console.log(`createUserDB: ${error.message}`);
        return []
    }
}

async function deleteUserDB(id) {
    const client = await pool.connect();
    try {
      await client.query('BEGIN');
      const sql = `DELETE FROM users WHERE id=$1 RETURNING *`;
      const data = (await client.query(sql, [id])).rows;
      await client.query('COMMIT');
      return data;
    } catch (error) {
      await client.query('ROLLBACK');
      console.log(`deleteUserDB: ${error.message}`);
      return [];
    }
  }

module.exports = { createUserDB, getUserDB, getUserIDDB,deleteUserDB }