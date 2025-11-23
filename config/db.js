const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',      // ubah sesuai user MySQL kamu
  port: 3308,
  password: 'Semogalancar1.',      // ubah sesuai password MySQL kamu
  database: 'project_api'
});

db.connect((err) => {
  if (err) throw err;
  console.log('✅ MySQL Connected...');
});

module.exports = db;
