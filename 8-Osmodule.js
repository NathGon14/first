const os  = require ('os')

//info about current use
const user = os.userInfo()

console.log(user)
// method reurnss the ssystsem uptime in sseconds
console.log(`The System uptime is ${os.uptime()} seconds`)

const currentOs = {
    name: os.type(),
    release: os.release(),
    totalmem: os.totalmem(),
    freemem: os.freemem(),
}

console.log(currentOs)

