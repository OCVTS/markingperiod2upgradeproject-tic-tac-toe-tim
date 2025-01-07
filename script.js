let currentPlayer = 'x';
let winner = '';
let turnCounter = 0;
let classArray = ['col1', 'col2', 'col3', 'row1', 'row2', 'row3', 'dia1', 'dia2'];
let P1Score = 0;
let P2Score = 0;
let caneArray = [];
let wreathArray = [];
let p1Name = '';
let p2Name = '';
let p1Char = '';
let p2Char = '';

cursor()
/********************* Function handles the player input and places mark on board. This may be completed as more than one function if you choose ********************************/
function playerMove(imgNum) {
if (winner == '') {
   if (document.getElementById(imgNum).src == '' || document.getElementById(imgNum).src == 'https://cautious-yodel-5gxjqjp96p66c76jq-5501.app.github.dev/transparent.png'){

   if (currentPlayer == 'x') {
      document.getElementById(imgNum).src = "cane.png";
   } else {
      document.getElementById(imgNum).src = "wreath.png"
   }
   
 checkWinner()
 turnCounter++
 if (turnCounter >= 9 && winner == '') {
   document.getElementById('winnerStatus').innerHTML = "It's a Tie!"
   setTimeout(resetGame, 4000)
   }

   if (currentPlayer == 'x') {
    currentPlayer = 'o';
   } else {
    currentPlayer = 'x';
      }
      cursor()
   }
   }
}

/********************* Function checks all rows, columns, and diagonals for three identical symbols ********************************/
function checkWinner() {
for (let i =0; i<classArray.length; i++) {
  const elements = document.getElementsByClassName(classArray[i]);
  if (elements[0].src != '' && elements[0].src != 'https://cautious-yodel-5gxjqjp96p66c76jq-5501.app.github.dev/transparent.png') {
  if (elements[0].src == elements[1].src && elements[0].src == elements[2].src){  
   winner = currentPlayer;
   
   document.getElementById('winnerStatus').innerHTML = 'Player ' + winner.toUpperCase() + ' wins!'
   
   if (currentPlayer == 'x') {
      P1Score++
   } else {
      P2Score++
   }

   document.getElementById('p1s').innerHTML = "P1's Score = " + P1Score
   document.getElementById('p2s').innerHTML = "P2's Score = " + P2Score

   setTimeout(resetGame, 4000)
  }
  }
   }
}

/********************* Function resets the game board ********************************/
function resetGame() {
currentPlayer = 'x';
winner = '';
turnCounter = 0;
for (let i = 1; i<10; i++){
document.getElementById(i.toString()).setAttribute('src', 'transparent.png');
}
cursor()
p1Char = document.getElementById('xCharacter').value
p2Char = document.getElementById('oCharacter').value
document.getElementById('head1').innerHTML= p1Char + p2Char
}

function cursor() {

   if(currentPlayer == 'x'){
       document.getElementsByTagName("body")[0].style.cursor = "url('X cursor.png'), auto";
   }else{
       document.getElementsByTagName("body")[0].style.cursor = "url('O cursor.png'), auto";
   }
   }

document.getElementById('b1').addEventListener('click', function() { playerMove('1')});
document.getElementById('b2').addEventListener('click', function() { playerMove('2')});
document.getElementById('b3').addEventListener('click', function() { playerMove('3')});
document.getElementById('b4').addEventListener('click', function() { playerMove('4')});
document.getElementById('b5').addEventListener('click', function() { playerMove('5')});
document.getElementById('b6').addEventListener('click', function() { playerMove('6')});
document.getElementById('b7').addEventListener('click', function() { playerMove('7')});
document.getElementById('b8').addEventListener('click', function() { playerMove('8')});
document.getElementById('b9').addEventListener('click', function() { playerMove('9')});
