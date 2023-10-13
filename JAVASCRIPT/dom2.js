// const t1 = performance.now();
// for(let i=1;i<=100;i++){
// let newElement =document.createElement('p');
// newElement.textContent='This is a para' +i;
 
// newElement.addEventListener('click',function(event){
//     console.log('I have clicked on my para');
// });
// myDiv.appendChild(newElement);
// }
// const t2 = performance.now();
// console.log("this took "+(t2-t1)+ "ms");


// const t3 = performance.now();
// for(let i=1;i<=100;i++){
//     let Element =document.createElement('p');
//     Element.textContent='This is a para' +i;

//     myDiv.appendChild(Element);
//     }
//     document.body.appendChild(myDiv);  
//     const t4 = performance.now();
// console.log("this took "+(t4-t3)+ "ms");



console.log('HI');
setTimeout(function(){
    console.log('123');
},5000);
console.log('Hello');    
//HI
//Hello
//123 -> after 5 sec