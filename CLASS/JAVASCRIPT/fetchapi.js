// async function utility(){
//     let content = await fetch('https://jsonplaceholder.typicode.com/todos/1');
//     let output = await content.json();
//     console.log(output);
// }
// utility();  

// async function helper(){
// let options ={
//   method: 'POST',
//   body: JSON.stringify({
//     title: 'foo',
//     body: 'bar',
//     userId: 1,
//   }),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
// };
// let content = await fetch('https://jsonplaceholder.typicode.com/posts',options);
// let response = content.json();
// return response;
// }
// async function utility(){
//   let ans=helper();
//   console.log(ans);
// }
// utility();

 //CLOSURE

 function outer(x){
  function inner(y){
      console.log(x+y+z);
  }
  let z = 100;

  return inner;
}

let myFunc = outer(5);
myFunc(10);
