// 1) node runs on a server  - not in a browser (backend or frontend)
// 2) The console is the terminal window
// 3) Global object instead of window object
// 4) CommonJS modules instead of ES6 Modules
/* console.log("Hello World")
console.log(global);
const os = require('os'); */
const os = require('os');
const path = require('path');
const {add, divide, multiply, sub} = require('./math')
/* console.log(os.type());
console.log(os.version());
console.log(os.homedir());
console.log(__dirname);
console.log(__filename);
console.log('---------------------------------');
console.log(path.dirname(__filename));
console.log(path.basename(__filename));
console.log(path.extname(__filename));
console.log('---------------------------------');
console.log(path.parse(__filename)); */

console.log(add(2,5))
console.log(sub(66,5))
console.log(multiply(2,5))
console.log(divide(15,5))

