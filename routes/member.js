const express = require('express');
const path = require('path');
const router = express.Router();

// -> /member/
router.get('/signup', (req, res, next)=>
{
  res.send('<h1>SIGN UP</h1>');
})

router.get('/login', (req, res, next)=>
{
  res.send('<h1>LOGIN</h1>');
})
module.exports = router;