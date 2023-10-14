// async function utility(){
//     let content = await fetch('https://jsonplaceholder.typicode.com/todos/1');
//     let output = await content.json();
//     console.log(output);
// }
// utility();  
let options ={
  method: 'POST',
  body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
};
let content = fetch('https://jsonplaceholder.typicode.com/posts',options);