import pool from './db.js';

async function testConnection() {
  try {
    const [rows] = await pool.query('SELECT * FROM users');
    console.log('All users:', rows);
  } catch (err) {
    console.error('Database connection failed:', err);
  }
}

testConnection();