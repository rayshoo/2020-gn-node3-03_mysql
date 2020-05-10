const express = require('express')
const app = express();
const path = require('path')
const mysql = require('mysql2');
const moment = require('moment');

/* Mysql */
const connect = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  database: 'node',
  user: 'root',
  password: '000000',
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

/* Routers */
app.get('/insert', (req, res, next) => {
  // connect.execute(sql문, 변수값, callback);
  const sql = `
    INSERT into sample
    (username, age, comment, created)
    values (?,?,?,?)`;
  const values = ['홍길만', 28, '형을 형이라...', moment(new Date()).format('YYYY-MM-DD HH:mm:ss')]; //new Date() 없어도 생성됨
  connect.execute(sql, values, (err, result) => {
    if (err) {
      console.log(err);
      res.json(err);
    } else {
      res.json(result);
    }
  })
});
