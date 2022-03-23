const { resolveSoa } = require("dns")
const {createReadStream} = require("fs")
const fs = require("fs")
const http = require("http")

const server = http.createServer()


server.on("request",(req,res)=>{
//     const stream = createReadStream("./subfolder/bigfile.txt"
// ,{highWaterMark:9000,
// encoding:"utf-8"})

const stream = fs.createReadStream("./subfolder/bigfile.txt","utf-8")

stream.on('open',(data)=>{

    stream.pipe(res)
})






// stream.on('data',(data)=>{

//     res.write(data)
// })

// stream.on('end',()=>{

//     res.end("musta")
// })



})

server.listen(5000)






// console.log(data);




// stream.on('error',(err)=>{


//     console.log(err);
    
//     })