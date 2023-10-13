async function utility(){
    let content = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    let output = await content.json();
    console.log(output);
}
utility();