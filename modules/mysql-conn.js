const mysql = require('mysql2/promise');
const pool = mysql.createPool({
  host : 'localhost',
  port : 3306,
  user : 'root',
  password : '000000',
  database : 'node',
  waifForConnections : true, /* 있어야 10개 connectionLimits 넘게 요청 들어왔을때 에러 안남 */
  connectionLimit : 10,
});

module.exports = {mysql, pool};