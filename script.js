// variables, p1 is player one and p2 is player two, Char is short for character
let gameStart = false;
let p1Char= 'X';
let p2Char= 'O';
let p1Name = '';
let p2Name = '';
let P1Score = 0;
let P2Score = 0;
let currentPlayer = p1Char;
let winner = false; //has someone(regardless of player) won the game
let previousSpace = ''; //The variable that describes the board in which the next player must play, based on the last played space
//These arrays contain the number value of each space that are part of each win condition, think like an oldschool phone keypad
let col1 = [1, 4, 7]
let col2 = [2, 5, 8]
let col3 = [3, 6, 9]
let row1 = [1, 2, 3]
let row2 = [4, 5, 6]
let row3 = [7, 8, 9]
let dia1 = [1, 5, 9]
let dia2 = [3, 5, 7]
// an array of those previous arrays, allowing easier way to loop through them
let classArray = [col1, col2, col3, row1, row2, row3, dia1, dia2]; 
// An object for each board including each space as a number, its name as a string, whether its full or not, who won the board, and the numer of times played in the board
const A = {1:'', 2:'', 3:'', 4:'', 5:'', 6:'', 7:'', 8:'', 9:'', name:'A', open:true, winner:'', count:0};
const B = {1:'', 2:'', 3:'', 4:'', 5:'', 6:'', 7:'', 8:'', 9:'', name:'B', open:true, winner:'', count:0};
const C = {1:'', 2:'', 3:'', 4:'', 5:'', 6:'', 7:'', 8:'', 9:'', name:'C', open:true, winner:'', count:0};
const D = {1:'', 2:'', 3:'', 4:'', 5:'', 6:'', 7:'', 8:'', 9:'', name:'D', open:true, winner:'', count:0};
const E = {1:'', 2:'', 3:'', 4:'', 5:'', 6:'', 7:'', 8:'', 9:'', name:'E', open:true, winner:'', count:0};
const F = {1:'', 2:'', 3:'', 4:'', 5:'', 6:'', 7:'', 8:'', 9:'', name:'F', open:true, winner:'', count:0};
const G = {1:'', 2:'', 3:'', 4:'', 5:'', 6:'', 7:'', 8:'', 9:'', name:'G', open:true, winner:'', count:0};
const H = {1:'', 2:'', 3:'', 4:'', 5:'', 6:'', 7:'', 8:'', 9:'', name:'H', open:true, winner:'', count:0};
const I = {1:'', 2:'', 3:'', 4:'', 5:'', 6:'', 7:'', 8:'', 9:'', name:'I', open:true, winner:'', count:0};
// an array of all the boardobjects to loop through
const boardArray = [A, B, C, D, E, F, G, H, I]

//calls functions of placement and cursor to show the user where to play before they start
placement()
cursor()

function playerMove(board, num) { //playerMove function controls everything to do with the player clicking on a square in the board
if (gameStart == true) { //checks if the game has started yet
      // This if statement checks if they are playing in the correct board, if that board is open, there has not been a winner, and if the space is empty, else function stops
      if ((board.name == previousSpace || previousSpace == '') && (board.open == true) && (winner == false) && (board[num] == '')){
      // Uses the element with the id of the board, and the numbered space, changes that space in both the html and the JS object
         document.getElementById(board.name+num).innerHTML = currentPlayer
         board[num] = currentPlayer
         board.count++ //used for checking ties in individual boards
         checkWinner()
      //checks for tie by asking if there is no winner in a board, and if the turncount is 9 or greater, means all spaces are filled.
         if (board.winner == '' && board.count >= 9) {
            board.open = false
            document.getElementById(board.name).style.filter = 'blur(2px)'
         }
      // if the board that the user must play in is open, it sets previousSpace to the string value of the required board.
         if (boardArray[num-1].open) {
            previousSpace = boardArray[num-1].name
         } else {
            previousSpace = ''
         }
      //switches player, if 1 change to 2, if 2 change to 1
        if (currentPlayer == p1Char) {
           currentPlayer = p2Char;
         } else {
            currentPlayer = p1Char;
         }
      //runs functions to tell the player where and who to play
         placement();
         cursor()
      }
   }
}

function checkWinner() { //Checks winner in both the small boards, and the large board, in every possible direction, as well as changing all the necessary variables
   //These two loops combined go through both the boardArray to check each board, and the classArray to check all win conditions
   for (let i = 0; i<8;i++){
      boardArray.forEach((board) => {
         if (board.open == true) {
            //Checks the value of the board object with the value name of the classArray at index i with that arrays index set to a fixed value of either the 1st, 2nd, or 3rd, value.
            if ((board[classArray[i][0]] == board[classArray[i][1]]) && (board[classArray[i][1]] == board[classArray[i][2]]) && (board[classArray[i][0]] != '')) {
               //if 3 values in a row match each other, set the winner based on current player
               if (currentPlayer == p1Char){
                  // for both p1 or p2 wins, set the board to open, set the winner in JS and in HTML, and remove openBoard class to take away grid styling effects
                  board.open = false
                  board.winner = p1Char
                  document.getElementById(board.name).classList.remove('openBoard')
                  document.getElementById(board.name).innerHTML = p1Char 
               } else {
                  board.open = false
                  board.winner = p2Char
                  document.getElementById(board.name).classList.remove('openBoard')
                  document.getElementById(board.name).innerHTML = p2Char
               }
            }
         }
      })
   }
   // loops through each win condition, to check if there are three boards in a row
   classArray.forEach(con => {
      // checks the winner value of board objects in the board array at the value of con(condition)-1 due to arrays starting at 0
      if (boardArray[con[0]-1].winner == boardArray[con[1]-1].winner && boardArray[con[0]-1].winner == boardArray[con[2]-1].winner && boardArray[con[0]-1].winner != '') {
         winner=true
         // changes the winner text in the sidebar and increases the score
         if (currentPlayer == p1Char) {
            document.getElementById('winnerStatus').innerHTML = p1Name + ' Wins'
            P1Score++
            document.getElementById('p1s').innerHTML = P1Score
         } else if (currentPlayer == p2Char) {
            document.getElementById('winnerStatus').innerHTML = p2Name + ' Wins'
            P2Score++
            document.getElementById('p2s').innerHTML = P2Score
         }
      } else {
         return
      }
   })
   let numBoardWon = 0;
   boardArray.forEach(board => {if (board.winner != ''){numBoardWon++}})
   if (numBoardWon == 9 && winner == false) {

      document.getElementById('winnerStatus').innerHTML = 'Full Tie'
   }
}


const close = () => {
   document.getElementById("instructions-container").style.visibility = 'hidden';
   document.getElementById("blurred1").style.filter = 'blur(0)';
   document.getElementById("blurred2").style.filter = 'blur(0)';
}


/********************* Function resets the game board ********************************/
function startGame(){
   p1Char = document.getElementById('xCharacter').value
   p2Char = document.getElementById('oCharacter').value
   p1Name = document.getElementById('p1Name').value
   p2Name = document.getElementById('p2Name').value
/******************************************Easter Egg*****************************************/
   switch(p1Name.toLowerCase()){
      case "kalel":
         p1Char = '🦸'
         break;
      case "jacob":
         p1Char = '🧝'
         break;
      case "brendan":
         p1Char = '🥋'
         break;
      case "ivan":
         p1Char = '⁵²'
         break;
      case 'you like jazz?':
         p1Char = '🐝'
         break;
   }
   switch(p2Name.toLowerCase()){
      case "kalel":
         p2Char = '🂡'
         break;
      case "jacob":
         p2Char = '🍚'
         break;
      case "brendan":
         p2Char = '😛'
         break;
      case "ivan":
         p2Char = '🏈'
         break;
      case 'you like smooth jazz?':
         p2Char = '🍯'
         break;
   }
   currentPlayer = p1Char;
   document.getElementById("tttgrid").style.filter = 'blur(0)';
   gameStart = true
}

function resetGame() {
   gameStart = false
   document.getElementById("tttgrid").style.filter = 'blur(1.5rem)';
   winner = false;
   previousSpace = ''
   p1Char= 'X';
   p2Char= 'O';
   p1Name = '';
   p2Name = '';
   document.getElementById('p1Name').value = p1Name
   document.getElementById('p2Name').value = p2Name
   document.getElementById('xCharacter').value = p1Char
   document.getElementById('oCharacter').value = p2Char
   currentPlayer = p1Char
   cursor()
   boardArray.forEach(board => {
      document.getElementById(board.name).innerHTML = '';
      for (let i = 1; i<10;i++){
         board[i] = '';
         board.count=0
         board.winner=''
         board.open=true
         const div = document.createElement('div')
         div.id = board.name + i
         div.classList.add('innerGrid')
         div.onclick = function(){playerMove(board, i)}
         document.getElementById(board.name).appendChild(div)
      }
      if (!document.getElementById(board.name).classList.contains('openBoard')){
         document.getElementById(board.name).classList.add('openBoard')
      }
   })
 }
 
function placement(){
   let placementVar = '';
   switch(previousSpace){
      case 'A':
         placementVar = 'the Top Left';
         break;
      case 'B':
         placementVar = 'the Top Middle';
         break;
      case 'C':
         placementVar = 'the Top Right';
         break;
      case 'D':
         placementVar = 'the Middle Left'
         break;
      case 'E':
         placementVar = 'the Center'
         break;
      case 'F':
         placementVar = 'the Middle Right'
         break;
      case 'G':
         placementVar = 'the Bottom Left'
         break;
      case 'H':
         placementVar = 'the Bottom Middle'
         break;
      case 'I':
         placementVar = 'the Bottom Right'
         break;
      default:
         placementVar = 'any'
         break;
      }
   document.getElementById('placement').innerHTML = `You can play in ${placementVar} board`
}


function scoreReset(){
   P1Score = 0;
   P2Score = 0;
   document.getElementById('p1s').innerHTML = P1Score;
   document.getElementById('p2s').innerHTML = P2Score;
}


//𒁬 -tim
   cursor()


function cursor(){
   if(previousSpace == ''){
      if(currentPlayer == p1Char){
         boardArray.forEach(board => {
            document.getElementById(board.name).style.cursor = "url('X cursor.png'), auto";
         })
      }else{
         boardArray.forEach(board => {
            document.getElementById(board.name).style.cursor = "url('O cursor.png'), auto";
         })
      }
   }else{
      boardArray.forEach(board => {
         if(board.name != previousSpace){
            document.getElementById(board.name).style.cursor = 'not-allowed';
         }else{
            if(currentPlayer == p1Char){
               document.getElementById(board.name).style.cursor = "url('X cursor.png'), auto";
            }else{
               document.getElementById(board.name).style.cursor = "url('O cursor.png'), auto";
            }
         }
      })
   }
}
//𒁬 -Timothy.
document.getElementById('close').addEventListener('click',close)
function setColor(){
   if(document.getElementById('colorInput').value == ''){
   let sliderNum = document.getElementById('sliderNum').value;
   document.getElementById('html').style.filter =`hue-rotate(${sliderNum}deg)`;
   }
   document.getElementById('html').style.filter =`hue-rotate(${document.getElementById('colorInput').value}deg)`
}
function rndmColor(){
   let rndmNum = Math.floor(Math.random()*360)
   document.getElementById('html').style.filter =`hue-rotate(${rndmNum}deg)`;
}

function displayColor(){
   if(document.getElementById('colorInput').value == ''){
   document.getElementById('html').style.filter =`hue-rotate(0deg)`;
   let sliderNum = document.getElementById('sliderNum').value;
   document.getElementById('colorDisplay').style.filter =`hue-rotate(${sliderNum}deg)`;
}else{
   let sliderNum = document.getElementById('colorInput').value
   document.getElementById('html').style.filter =`hue-rotate(0deg)`;
   document.getElementById('colorDisplay').style.filter =`hue-rotate(${sliderNum}deg)`;
}  
}