let p1Char= 'X';
let p2Char= 'O';
let P1Score = 0;
let P2Score = 0;
let p1Name = 'P1';
let p2Name = 'P2';
let currentPlayer = p1Char;
let winner = '';
let turnCounter = 0;
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
const A = {1:'A1', 2:'A2', 3:'A3', 4:'A4', 5:'A5', 6:'A6', 7:'A7', 8:'A8', 9:'A9', name:'A', open:true, winner:''};
const B = {1:'B1', 2:'B2', 3:'B3', 4:'B4', 5:'B5', 6:'B6', 7:'B7', 8:'B8', 9:'B9', name:'B', open:true, winner:''};
const C = {1:'C1', 2:'C2', 3:'C3', 4:'C4', 5:'C5', 6:'C6', 7:'C7', 8:'C8', 9:'C9', name:'C', open:true, winner:''};
const D = {1:'D1', 2:'D2', 3:'D3', 4:'D4', 5:'D5', 6:'D6', 7:'D7', 8:'D8', 9:'D9', name:'D', open:true, winner:''};
const E = {1:'E1', 2:'E2', 3:'E3', 4:'E4', 5:'E5', 6:'E6', 7:'E7', 8:'E8', 9:'E9', name:'E', open:true, winner:''};
const F = {1:'F1', 2:'F2', 3:'F3', 4:'F4', 5:'F5', 6:'F6', 7:'F7', 8:'F8', 9:'F9', name:'F', open:true, winner:''};
const G = {1:'G1', 2:'G2', 3:'G3', 4:'G4', 5:'G5', 6:'G6', 7:'G7', 8:'G8', 9:'G9', name:'G', open:true, winner:''};
const H = {1:'H1', 2:'H2', 3:'H3', 4:'H4', 5:'H5', 6:'H6', 7:'H7', 8:'H8', 9:'H9', name:'H', open:true, winner:''};
const I = {1:'I1', 2:'I2', 3:'I3', 4:'I4', 5:'I5', 6:'I6', 7:'I7', 8:'I8', 9:'I9', name:'I', open:true, winner:''};
const boardArray = [A, B, C, D, E, F, G, H, I]


// cursor()
/********************* Function handles the player input and places mark on board. This may be completed as more than one function if you choose ********************************/
function playerMove(board, num) {
if (board.name == previousSpace || previousSpace == ''){
   if (board.open == true) {
      if (document.getElementById(board.name+num).innerHTML == ''){
      if (currentPlayer == p1Char) {
        document.getElementById(board.name+num).innerHTML = p1Char;
         for (let i = 0; i<9;i++){
            for (let j = 1; j<10;j++){
               if (boardArray[i][j] == board.name+num){
                  boardArray[i][j] = p1Char
               }
            }
         }
      } else {
         document.getElementById(board.name+num).innerHTML = p2Char;
         for (let i = 0; i<9;i++){
            for (let j = 1; j<10;j++){
               if (boardArray[i][j] == board.name+num){
                  boardArray[i][j] = p2Char
               }
            }
         }
      }
   }
   if (boardArray[num-1].open) {
   previousSpace = boardArray[num-1].name
   } else {
      previousSpace = ''
   }
   turnCounter++
   checkWinner()
   if (currentPlayer == p1Char) {
   currentPlayer = p2Char;
   } else {
   currentPlayer = p1Char;
   }
}
}
}
/********************* Function checks all rows, columns, and diagonals for three identical symbols ********************************/

function checkWinner() {
   for (let i = 0; i<8;i++){
         boardArray.forEach((board) => {
         if (board.open == true) {
           if ((board[classArray[i][0]] == board[classArray[i][1]]) && (board[classArray[i][1]] == board[classArray[i][2]])) {
            winner=true
            if (currentPlayer == p1Char){
               alert(p1Name + ' won ' + board.name)
               board.open = false
               board.winner = p1Char
               document.getElementById(board.name).classList.remove('openBoard')
               document.getElementById(board.name).innerHTML = p1Char
            } else {
               alert(p2Name + ' won ' + board.name)
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
            alert('you win')
         } else {
            return
         }
      }) 
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
   switch(p1Name){
      case "Kalel":
      p1Char = '🂡'
      break;
      case "Jacob":
      p1Char = '🧝'
      break;
      case "Brendan":
      p1Char = '🥋'
      break;
      case "Ivan":
      p1Char = '🏈'
      break;
   }
   switch(p2Name){
      case "Kalel":
      p1Char = '🦸'
      break;
      case "Jacob":
      p1Char = '🍚'
      break;
      case "Brendan":
      p1Char = '😛'
      break;
      case "Ivan":
      p1Char = '⁵²'
      break;
   }
   currentPlayer = p1Char;
   
   document.getElementById("tttgrid").style.filter = 'blur(0)';
}
function resetGame() {
winner = '';
document.getElementById('winnerStatus').innerHTML = 'Winner'
turnCounter = 0;
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

