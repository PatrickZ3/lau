import pool from './db.js';

export async function getAllUsers() {
  const [rows] = await pool.query('SELECT * FROM users');
  return rows;
}