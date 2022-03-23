const http = require("http")




const server = http.createServer((req,res)=>{
console.log(req.url)

if(req.url ==='/'){
    res.end('Welcome to out hodmepage')

}
if(req.url ==='/about'){
    res.end('Welcome to out about')
}
 
res.end('<p>hahhdshdh</p>')

})
server.listen(5000)