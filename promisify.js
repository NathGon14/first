const { reject } = require("lodash")
const util =  require("util")




const promis = util.promisify(doSomething)




const time = ()=>{

    return new Promise((resolve,reject)=>{
            if(true){
            resolve("yey");
            }


    })




}

function doSomething(foo, callback) {

    console.log(foo);

  }
  
  doSomething[util.promisify.custom] = (foo) => {
    return time();
  };


  const porm = new Promise((res,reject)=>{
if(true){

res("hie");

}



  })

  console.log(porm)

  porm.then((res)=>{

console.log(res);

  })