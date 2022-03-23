const {readFile,writeFile} = require('fs')
const { resolve } = require('path')

const util = require("util")
const readFilePromise = util.promisify(readFile)
const writeFilePromise = util.promisify(writeFile)

const timout = ((err,data)=>{

})  

const settime = util.promisify(timout)

const start = async()=>{
    try {
        const first =  await  readFilePromise("./subfolder/first.txt","utf8")
            console.log("me firsts");

      
     const samp =  settime().then(console.log("assdasda"))

     
  
        const second =  await getText("./subfolder/second.txt")
        await writeFilePromise("./subfolder/resultAgain.txt",`Hello: ${first} , ${second}`)
        
        console.log(first,"+=",second);
    } catch (error) {
        console.log(error);
    }



}

start()










const timeOut = (path) =>{

    return 
}





const getText = (path) =>{

    return new Promise ((resolve,reject)=>{

        readFile(path,"utf8",(err,data)=>{
            if(err){
            reject(err)
            }else{
                resolve(data)
            }
        
        })

        
    })
}

// getText("./subfolder/first.txt").then(
//     (result)=> console.log(result)
// ).catch((err)=>console.log(err))



