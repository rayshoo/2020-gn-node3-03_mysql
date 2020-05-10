const express = require('express');
const router = express.Router();
const{mysql, pool} = require('../modules/mysql-conn');

router.get('/list', async(req,res,next) =>{
  let sql = 'SELECT * FROM sample';
  const result = await pool.execute(sql);
  res.json(result[0]); /* mysql result[1]에 connect 정보같은 필요없는것들 있어서 결과(result[0])만 보냄 */
})

module.exports = router;