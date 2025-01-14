let p1Char= 'X';
let p2Char= 'O';
let P1Score = 0;
let P2Score = 0;
let p1Name = 'P1';
let p2Name = 'P2';
let currentPlayer = p1Char;
let winner = '';
let turnCounter = 0;
let col1 = [1, 4, 7]
let col2 = [2, 5, 8]
let col3 = [3, 6, 9]
let row1 = [1, 2, 3]
let row2 = [4, 5, 6]
let row3 = [7, 8, 9]
let dia1 = [1, 5, 9]
let dia2 = [3, 5, 7]
let classArray = [col1, col2, col3, row1, row2, row3, dia1, dia2];
const A = {1:'a1',2:'a2',3:'a3',4:'a4',5:'a5',6:'a6',7:'a7',8:'a8',9:'a9', name:'A'}
const B = {1:'b1',2:'b2',3:'b3',4:'b4',5:'b5',6:'b6',7:'b7',8:'b8',9:'b9', name:'B'}
const C = {1:'c1',2:'c2',3:'c3',4:'c4',5:'c5',6:'c6',7:'c7',8:'c8',9:'c9', name:'C'}
const D = {1:'d1',2:'d2',3:'d3',4:'d4',5:'d5',6:'d6',7:'d7',8:'d8',9:'d9', name:'D'}
const E = {1:'e1',2:'e2',3:'e3',4:'e4',5:'e5',6:'e6',7:'e7',8:'e8',9:'e9', name:'E'}
const F = {1:'f1',2:'f2',3:'f3',4:'f4',5:'f5',6:'f6',7:'f7',8:'f8',9:'f9', name:'F'}
const G = {1:'g1',2:'g2',3:'g3',4:'g4',5:'g5',6:'g6',7:'g7',8:'g8',9:'g9', name:'G'}
const H = {1:'h1',2:'h2',3:'h3',4:'h4',5:'h5',6:'h6',7:'h7',8:'h8',9:'h9', name:'H'}
const I = {1:'i1',2:'i2',3:'i3',4:'i4',5:'i5',6:'i6',7:'i7',8:'i8',9:'i9', name:'I'}
const boardArray = [A, B, C, D, E, F, G, H, I]


// cursor()
/********************* Function handles the player input and places mark on board. This may be completed as more than one function if you choose ********************************/
function playerMove(boxNum) {

if (winner == false) {
   if (document.getElementById(boxNum).innerHTML == ''){

   if (currentPlayer == p1Char) {
      document.getElementById(boxNum).innerHTML = p1Char;
      for (let i = 0; i<9;i++){
         for (let j = 1; j<10;j++){
            if (boardArray[i][j] == boxNum){
               boardArray[i][j] = p1Char
            }
         }
      }
   } else {
      document.getElementById(boxNum).innerHTML = p2Char;
      for (let i = 0; i<9;i++){
         for (let j = 1; j<10;j++){
            if (boardArray[i][j] == boxNum){
               boardArray[i][j] = p2Char
            }
         }
      }
   }
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
/********************* Function checks all rows, columns, and diagonals for three identical symbols ********************************/

function checkWinner() {
   for (let i = 0; i<8;i++){
         boardArray.forEach((board) => {
           if ((board[classArray[i][0]] == board[classArray[i][1]]) && (board[classArray[i][1]] == board[classArray[i][2]])) {
            winner=true
            if (currentPlayer == p1Char){
               alert(p1Name + ' won ' + board.name)
               document.getElementById(board.name).innerHTML = p1Char
            } else {
               alert(p2Name + ' won ' + board.name)
               document.getElementById(board.name).innerHTML = p2Char
            }
           }
         })
      }
   }

const close = () => {
   document.getElementById("instructions-container").style.visibility = 'hidden';
   document.getElementById("blurred1").style.filter = 'blur(0)';
   document.getElementById("blurred2").style.filter = 'blur(0)';
}

/********************* Function resets the game board ********************************/
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

