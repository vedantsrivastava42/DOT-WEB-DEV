
let indicator= document.querySelector("[data-indicator]");
let generateBtn= document.querySelector(".generateBtn");
let allCheckBox= document.querySelectorAll("input[type=checkbox");

const symbols = '~`!@#$%^&*()_-+={[}]|:;"<,>.?/';
//default 
let password="";
let checkCount =0;
  
//strength circle to grey.

//Functions needed
// copyoutput(); -> copy output
// handleslider(); -> handle inputSlider
// generatePassword(); 
// setindicator(); -> change color of div
// getRandomInteger(); 
// getRandomLowercase();
// getRandomUppercase();
// getRandomnumber();
// get Randomsymbol();

let slider= document.querySelector("[lengthSlider]");
let lengthDisplay= document.querySelector("[lengthDisplay]");
function handleSlider() {
    slider.value = passwordLength;
    lengthDisplay.innerText = passwordLength;
    const min=slider.min;
    const max=slider.max;
    slider.style.backgroundSize = ((passwordLength- min)*100/(max-min)) + "% 100%"
}

let passwordLength = 10;
handleSlider();

slider.addEventListener('input', (event) => {
    passwordLength = event.target.value;
    handleSlider();
});
// console.log("Password length shown");

function setindicator(color){
indicator.style.backgroundColor = color;
indicator.style.boxShadow = '0px 0px 12px 1px ${color}';
}
let UppercaseCheck= document.querySelector("#uppercase");
let LowercaseCheck= document.querySelector("#lowercase");
let NumberCheck= document.querySelector("#numbers");
let SymbolCheck= document.querySelector("#symbols");
function getRandomInteger(min,max){
  return Math.floor(Math.random() * (max-min)) + min;
}

function generateNumber() {
    return getRandomInteger(1, 10);
}

function generateLowerCase() {
    return String.fromCharCode(getRandomInteger(97,123)) 
}

function generateUppercase() {
    return String.fromCharCode(getRandomInteger(65,91))
}

function generateSymbol() {
   let randNum =getRandomInteger(0,symbols.length);
   return symbols[randNum];
}


function calcStrength() {
    let hasUpper = false;
    let hasLower = false;
    let hasNumber = false;
    let hasSymbol = false;

    if (uppercase.checked) hasUpper = true;
    if (lowercase.checked) hasLower = true;
    if (numbers.checked) hasNumber = true;
    if (symbols.checked) hasSymbol = true;

    if (hasUpper && hasLower && (hasNumber || hasSymbol) && passwordLength >= 8) {
        setindicator("#0f0");
    } else if (
        (hasLower || hasUpper) &&
        (hasNumber || hasSymbol) &&
        passwordLength >= 6
    ) {
        setindicator("#ff0");
    } else {
        setindicator("#f00");
    }
}
//copy message
let passwordDisplay= document.querySelector("[data-passwordDsiplay]");
let copyBtn= document.querySelector("[data-copyBtn]");
let copyMsg= document.querySelector("[data-copyMsg]");
async function copyContent(){
    try{
        await navigator.clipboard.writeText(passwordDisplay.value);
        copyMsg.innerText ="copied";
    }
    catch(e){
        copyMsg.innerText="Failed";
    }
    //to make copied tag visible
    copyMsg.classList.add("active");
    setTimeout(() => {
        copyMsg.classList.remove("active");
    },2000)
}

copyBtn.addEventListener("click", () => {
    if (passwordDisplay.value)
        copyContent();
});

function handleCheckBox(){
    checkCount=0;
    allCheckBox.forEach((checkbox)=> {
        if(checkbox.checked)
        checkCount++;
    });
   
    //special condition if length is less than checked boxes
    if(passwordLength<checkCount){
    passwordLength=checkCount;
    handleSlider();
}
}

function shuffle(array) {
    //Fisher Yates Method
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    let str = "";
    array.forEach((el) => (str += el));
    return str;
}


//saare checkbox pe eventlistener
allCheckBox.forEach((checkbox)=> {
    checkbox.addEventListener('change',handleCheckBox);
})

copyBtn.addEventListener('click' , () => {
    if(passwordDisplay.value)
    copyContent();
})

generateBtn.addEventListener('click',()=>{
    //none of the checkbox is selected
    if(checkCount<=0) return;

      //special condition if length is less than checked boxes
      if(passwordLength<checkCount){
      passwordLength=checkCount;
      handleSlider();
      }
      

      //lets start to find new password

      //remove old password
      password="";
      
      //let's put the conditions mentioned in checkboxes

    //   if(UppercaseCheck.checked){
    //     password+=generateUppercase();
    //   }
    //   if(LowercaseCheck.checked){
    //     password+=generateLowerCase();
    //   }
    //   if(NumberCheck.checked){
    //     password+=generatenumbers();
    //   }
    //   if(SymbolCheck.checked){
    //     password+=generateSymbol();
    //   }

    let funcArr = [];

    if (UppercaseCheck.checked) 
        funcArr.push(generateUppercase);
    if (LowercaseCheck.checked) 
        funcArr.push(generateLowerCase);
    if (NumberCheck.checked) 
        funcArr.push(generateNumber);
    if (SymbolCheck.checked) 
        funcArr.push(generateSymbol);
    
    //compulsory addition
    for(let i=0;i<funcArr.length;i++){
        password+= funcArr[i]();
    }
    //remanining addition
    for(let i=0;i<passwordLength-funcArr.length;i++){
        let randIndex = getRandomInteger(0,funcArr.length);
        // console.log("randIndex"+ randIndex);
        password+=funcArr[randIndex]();
    }
     
    //shuffle the password
    password = shuffle(Array.from(password));

    //show in UI
    passwordDisplay.value=password;

    //calculate strength
    calcStrength();
  
}); 
   