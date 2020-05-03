const express = require('express');
const app = express();
const path = require('path');

/* View engine */
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, './views'));

/* MiddleWare */
app.use(express.json());
app.use(express.urlencoded({extended : false}));
app.use('/', express.static('public', path.join(__dirname, './public')));

app.listen(3000,function(){
  console.log('http://127.0.0.1:3000');
});

/* Routers */