const { sum, mul } = require('./js/mathUtils').default

import { obj } from './js/info'

require('./css/normal.css')

require('./css/special.less')

document.writeln('<h2>你好啊，李银河</h2>')

require('./img/1.jpg')

document.writeln(
  '<input type="image" src="./dist/43bf84bbb4293ede71e2eeec931fffcb.jpg" alt="">'
)

console.log(sum(10, 20))
console.log(mul(4, 5))
console.log(obj)
