const gameInfo = document.querySelector('.gameInfo');
const boxes = document.querySelectorAll('.box');
const newGameBtn = document.querySelector('.btn');

let currentPlayer;
let gameGrid;

const winningPositions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

// Initialize the game
function initialize() {
    // Set Current Player to X 
    currentPlayer = 'X';
    gameInfo.textContent = `Current Player: ${currentPlayer}`;

    // Empty Kar Do Boxes 
    gameGrid = ["", "", "", "", "", "", "", "", ""]

    // Make Boxes Empty
    boxes.forEach((box,index) => {
        box.textContent = "";
        box.style.pointerEvents = "all";
        box.classList = `box box${index+1}`;
    });

    // Remove Active Class From Button
    newGameBtn.classList.remove("active");
}

initialize();


// Handle Click Game 
function handleClick(index) {
    if (gameGrid[index] === "") {
        boxes[index].style.pointerEvents = "none";
        boxes[index].textContent = currentPlayer;
        gameGrid[index] = currentPlayer;
        swapTurns();
        gameInfo.textContent = `Current Player : ${currentPlayer}`;
        checkGameOver();
    }
}


// Check Game is Over or Not 
function checkGameOver(){
    let answer ="";
    //All 3 boxes should be non empty and same value
     winningPositions.forEach((position)=>{
        if((gameGrid[position[0]] !=="" || gameGrid[position[1]] !=="" || gameGrid[position[2]] !=="" ) 
        && gameGrid[position[0]] === gameGrid[position[1]] && gameGrid[position[1]] === gameGrid[position[2]]  ){
        //check if winner is X
        if(gameGrid[position[0]]==="X")
        answer="X";
    else
    answer="O";


    //disable pointer events
    boxes.forEach((box)=>{
        box.style.pointerEvents="none";
    })
    //now we know the winner
    boxes[position[0]].classList.add("win");
    boxes[position[1]].classList.add("win");
    boxes[position[2]].classList.add("win");
   
        }
     });
 if(answer!==""){
    gameInfo.innerText=`Winner Player : ${answer}`;
    newGameBtn.classList.add("active");
    return;
 }
      
//Tie condtion
let fillCount=0;
gameGrid.forEach((box)=>{
    if(box!=="")
    fillCount++;
});

//if all boxes full Match tied

if(fillCount===9){
gameInfo.innerText="Game Tied";
newGameBtn.classList.add("active");
}

}

// Swapping Turns 
function swapTurns() {
if(currentPlayer ==="X"){
    currentPlayer="O";
}
else{
    currentPlayer="X";
}
gameInfo.innerText = `Current Player -${currentPlayer}`; 
}


// Add Event Listener to all Boxes to Get Player Input
boxes.forEach((box, index) => {
    box.addEventListener('click', () => {
        handleClick(index);
    });
});

// Add Event Listener to Button 
newGameBtn.addEventListener('click', initialize);