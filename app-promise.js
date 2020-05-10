const express = require('express')
const app = express();
const path = require('path')
const mysql = require('mysql2/promise');
const moment = require('moment');

/* Mysql */
/* let connect;
(async() =>{
  connect = await mysql.createConnection({
    host: 'localhost',
    port: 3306,
    database: 'node',
    user: 'root',
    password: '000000',
  })
})(); */

let connect;

mysql.createConnection({
  host: 'localhost',
  port: 3306,
  database: 'node',
  user: 'root',
  password: '000000',
  waitForConnections : true // 동시접속 허용 > 이것도 한계가 있어서 createConnection 함수 자체를 잘 안씀 > createPoll? 씀
}).then((result)=>{
  connect = result;
}).catch((err)=>{
  console.log(err)
  connect = null;
});

/* View engine */
app.set('views', path.join(__dirname, '/views')); // prefix
app.set('view engine', 'pug'); //suffix
app.use('/', express.static(path.join(__dirname, './public')));

/* MiddleWare */
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use('/', express.static(path.join(__dirname, './public')));

app.listen(3000, () => {
  console.log('http://127.0.0.1:3000');
})

// /* Routers */
// app.get('/insert', (req, res, next) => {
//   // connect.execute(sql문, 변수값, callback);
//   const sql = `
//     INSERT into sample
//     (username, age, comment, created)
//     values (?,?,?,?)`;
//   const values = ['홍길만', 28, '형을 형이라...', moment(new Date()).format('YYYY-MM-DD HH:mm:ss')]; //new Date() 없어도 생성됨
//   connect.execute(sql, values)
//     .then((result) => {
//       res.json(result);
//     })
//     .catch((err) => {
//       res.json(err);
//     })
// })
/* Routers */
app.get('/insert', async(req, res, next) => {
  // connect.execute(sql문, 변수값, callback);
  let sql = `
    INSERT into sample
    (username, age, comment, created)
    values (?,?,?,?)`;
  let values = ['홍길만', 28, '형을 형이라...', moment(new Date()).format('YYYY-MM-DD HH:mm:ss')]; //new Date() 없어도 생성됨
  const result = await connect.execute(sql, values);
  res.json(result);
})

app.get('/insert2', (req, res, next) => {
  // connect.execute(sql문, 변수값, callback);
  let sql = `
    INSERT into sample
    (username, age, comment, created)
    values (?,?,?,?)`;
  let values = ['홍길만', 28, '형을 형이라...', moment(new Date()).format('YYYY-MM-DD HH:mm:ss')]; //new Date() 없어도 생성됨 
  connect.execute(sql, values)
  .then((result)=>{
    res.json(result);
  })
  .catch((err)=>
  {
    res.json(err);
  })
})