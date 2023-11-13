// let myPromise =new Promise(function(resolve,reject){
//     setTimeout(function() {
//         console.log('I am inside promise');
//     },5000); 
//     resolve(2003);
//     // reject(new Error('Error occured'))
// });
// console.log('First'); 
// myPromise.then((value) => {console.log(value)});
// myPromise.catch((error) => {console.log("Recieved an Error")});


let myPromise =new Promise(function(resolve,reject){
    setTimeout(function() {
        console.log('First'); 
    },2000); 
    resolve(true);
})
 
let output = myPromise.then(()=> {
    let myPromise1 = new Promise((resolve, reject)=>{
        setTimeout(()=> {
            console.log("Settimeout2 Started");
        },5000); 
        resolve("Waada 2 resolved");
    })
    return myPromise;
})
output.then((value)=>{console.log(value)});