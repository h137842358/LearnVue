const {
  sum,
  mul
} = require('./js/mathUtils').default

import {
  obj
} from './js/info'

require('./css/normal.css')

require('./css/special.less')

console.log(sum(10, 20))
console.log(mul(4, 5))
console.log(obj)