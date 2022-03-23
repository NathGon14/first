const path = require('path')

console.log(path.sepp)

const filePath = path.join('/subfolder',"content","text.txt")
console.log(filePath);
const base = path.basename(filePath)


const absolute = path.resolve(__dirname,'subfolder','content','test.txt')
console.log(absolute)
