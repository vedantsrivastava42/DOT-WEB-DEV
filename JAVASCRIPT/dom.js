
//Same Object
//refering similar function

// function eventFunction(){
//     console.log('I have clicked on the document');
// }
// document.addEventListener('click',eventFunction);
// document.removeEventListener('click',eventFunction);



//Different objects

// document.addEventListener('click',function(){
//     console.log('I have clicked on the document');
// });
// document.removeEventListener('click',function(){
//     console.log('I have clicked on the document');
// });


// const content=document.querySelector('#wrapper');
// content.addEventListener('click',function(hi){
//     console.log(hi);
// })


//prevent default -> prevents the default behaviour.


// let myDiv=document.createElement('div');

// for(let i=1;i<=100;i++){
// let newElement =document.createElement('p');
// newElement.textContent='This is a para' +i;
 
// newElement.addEventListener('click',function(event){
//     console.log('I have clicked on my para');
// });
// myDiv.appendChild(newElement);
// }
// document.body.appendChild(myDiv);


//target.textContent

// let element = document.querySelector('#wrapper');

// element.addEventListener('click', function(event){
//     if(event.target.nodeName==='SPAN')
//     console.log('span pr click kia hai'+ event.target.textContent);
// });
//In this its working for both para and span - we want only for span


