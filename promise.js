let promiseObj=new Promise((resolve,reject)=>{
console.log("getting value from API!!!!");
setTimeout(()=>{
    resolve("API value return");
    reject("new error occured");
},
1000);
})

console.log(promiseObj);
promiseObj.then(
    (val)=>{
    console.log("received value from ${val}");
},
(val)=>{
    console.log("error occured from ${val}");

});