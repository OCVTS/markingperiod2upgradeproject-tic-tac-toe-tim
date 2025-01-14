let p1Char= 'X';
let p2Char= 'O';
let p1Name = 'P1';
let p2Name = 'P2';
let P1Score = 0;
let P2Score = 0;
let currentPlayer = p1Char;
let winner = false;
let previousSpace = '';
let col1 = [1, 4, 7]
let col2 = [2, 5, 8]
let col3 = [3, 6, 9]
let row1 = [1, 2, 3]
let row2 = [4, 5, 6]
let row3 = [7, 8, 9]
let dia1 = [1, 5, 9]
let dia2 = [3, 5, 7]
let classArray = [col1, col2, col3, row1, row2, row3, dia1, dia2];
const A = {1:'', 2:'', 3:'', 4:'', 5:'', 6:'', 7:'', 8:'', 9:'', name:'A', open:true, winner:'', count:0};
const B = {1:'', 2:'', 3:'', 4:'', 5:'', 6:'', 7:'', 8:'', 9:'', name:'B', open:true, winner:'', count:0};
const C = {1:'', 2:'', 3:'', 4:'', 5:'', 6:'', 7:'', 8:'', 9:'', name:'C', open:true, winner:'', count:0};
const D = {1:'', 2:'', 3:'', 4:'', 5:'', 6:'', 7:'', 8:'', 9:'', name:'D', open:true, winner:'', count:0};
const E = {1:'', 2:'', 3:'', 4:'', 5:'', 6:'', 7:'', 8:'', 9:'', name:'E', open:true, winner:'', count:0};
const F = {1:'', 2:'', 3:'', 4:'', 5:'', 6:'', 7:'', 8:'', 9:'', name:'F', open:true, winner:'', count:0};
const G = {1:'', 2:'', 3:'', 4:'', 5:'', 6:'', 7:'', 8:'', 9:'', name:'G', open:true, winner:'', count:0};
const H = {1:'', 2:'', 3:'', 4:'', 5:'', 6:'', 7:'', 8:'', 9:'', name:'H', open:true, winner:'', count:0};
const I = {1:'', 2:'', 3:'', 4:'', 5:'', 6:'', 7:'', 8:'', 9:'', name:'I', open:true, winner:'', count:0};
const boardArray = [A, B, C, D, E, F, G, H, I]

// cursor()
/********************* Function handles the player input and places mark on board. This may be completed as more than one function if you choose ********************************/
function playerMove(board, num) {
if ((board.name == previousSpace || previousSpace == '') && (board.open == true) && (winner == false)){
   if (board[num] == '') {
      document.getElementById(board.name+num).innerHTML = currentPlayer
      board[num] = currentPlayer
      board.count++
   }
   checkWinner()
   if (board.winner == '' && board.count >= 9) {
      board.open = false
      document.getElementById(board.name).style.filter = 'blur(2px)'
   }
   if (boardArray[num-1].open) {
      previousSpace = boardArray[num-1].name
      } else {
         previousSpace = ''
      }
   if (currentPlayer == p1Char) {
   currentPlayer = p2Char;
   } else {
   currentPlayer = p1Char;
   }
}
}
/********************* Function checks all rows, columns, and diagonals for three identical symbols ********************************/

function checkWinner() {
   for (let i = 0; i<8;i++){
         boardArray.forEach((board) => {
         if (board.open == true) {
           if ((board[classArray[i][0]] == board[classArray[i][1]]) && (board[classArray[i][1]] == board[classArray[i][2]]) && (board[classArray[i][0]] != '')) {
            if (currentPlayer == p1Char){
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
      classArray.forEach(con => {
         if (boardArray[con[0]-1].winner == boardArray[con[1]-1].winner && boardArray[con[0]-1].winner == boardArray[con[2]-1].winner && boardArray[con[0]-1].winner != '') {
            winner=true
            alert('you win')
         } else {
            return
         }
      }) 
      let numBoardWon = 0;
      boardArray.forEach(board => {if (board.winner != ''){numBoardWon++}})
      if (numBoardWon == 9 && winner == false) {
         alert('Full Tie')
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
      p1Char = '🂡'
      break;
      case "jacob":
      p1Char = '🧝'
      break;
      case "brendan":
      p1Char = '🥋'
      break;
      case "ivan":
      p1Char = '🏈'
      break;
   }
   switch(p2Name.toLowerCase()){
      case "kalel":
      p2Char = '🦸'
      break;
      case "jacob":
      p2Char = '🍚'
      break;
      case "brendan":
      p2Char = '😛'
      break;
      case "ivan":
      p2Char = '⁵²'
      break;
   }
   currentPlayer = p1Char;
   document.getElementById("tttgrid").style.filter = 'blur(0)';
}
function resetGame() {
winner = '';
document.getElementById('winnerStatus').innerHTML = 'Winner'
turnCounter = 0;
p1Char = document.getElementById('xCharacter').value
p2Char = document.getElementById('oCharacter').value
p1Name = document.getElementById('p1Name').value
p2Name = document.getElementById('p2Name').value
/******************************************Easter Egg*****************************************/
switch(p1Name){
   case "kalel":
   p1Char = '🂡'
   break;
   case "jacob":
   p1Char = '🧝'
   break;
   case "brendan":
   p1Char = '🥋'
   break;
   case "ivan":
   p1Char = '🏈'
   break;
}
switch(p2Name){
   case "kalel":
   p1Char = '🦸'
   break;
   case "jacob":
   p1Char = '🍚'
   break;
   case "brendan":
   p1Char = '😛'
   break;
   case "ivan":
   p1Char = '⁵²'
   break;
}
currentPlayer = p1Char;
document.getElementById("tttgrid").style.filter = 'blur(0)';
}




// function cursor() {

//    if(currentPlayer == p1Char){
//        document.getElementsByTagName("body")[0].style.cursor = "url('X cursor.png'), auto";
//    }else{
//        document.getElementsByTagName("body")[0].style.cursor = "url('O cursor.png'), auto";
//    }
//    }
//𒁬 -tim
document.getElementById('close').addEventListener('click',close)

