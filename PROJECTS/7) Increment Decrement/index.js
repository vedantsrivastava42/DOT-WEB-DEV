const countValue =document.querySelector('#counter');

//const increment = function() {}
const increment = () => {
let value = parseInt(countValue.innerText);  //parseInt -> String to Integer
//increment value
value=value+1;
//set the value into UI
countValue.innerText =value;

};

const decrement = () => {
    let value = parseInt(countValue.innerText);  //parseInt -> String to Integer
    //increment value
    value=value-1;
    //set the value into UI
    countValue.innerText = value;
    
};