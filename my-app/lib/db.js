import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  user: 'root',                 // your MySQL user
  password: '2688',                 // your MySQL password (leave blank if none)
  database: 'myapp',            // your database name
  socketPath: '/tmp/mysql.sock', // add this line
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

export default pool;
