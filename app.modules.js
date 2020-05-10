const calc = require('./modules/sample'); /* 사용자 정의 모듈은 ./ 반드시 붙여줘야됨 */
const {sub, sum} = require('./modules/sample');
console.log(calc.sum(10,20));
console.log(sub(10,20));