let p1Char= 'X';
let p2Char= 'O';
let currentPlayer = p1Char;
let winner = '';
let turnCounter = 0;
let classArray = ['col1', 'col2', 'col3', 'row1', 'row2', 'row3', 'dia1', 'dia2'];
let P1Score = 0;
let P2Score = 0;
let p1Name = '';
let p2Name = '';

// cursor()
/********************* Function handles the player input and places mark on board. This may be completed as more than one function if you choose ********************************/
function playerMove(boxNum) {

if (winner == false) {
   if (document.getElementById(boxNum).innerHTML == ''){

   if (currentPlayer == p1Char) {
      document.getElementById(boxNum).innerHTML = p1Char;
   } else {
      document.getElementById(boxNum).innerHTML = p2Char;
   }
   
 checkWinner()
//  alert(currentPlayer)
 turnCounter++
 if (turnCounter >= 9 && winner == false) {
   document.getElementById('winnerStatus').innerHTML = "It's a Tie!"
   setTimeout(resetGame, 4000)
   }

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
for (let i=0; i<classArray.length; i++) {
    const elements = document.getElementsByClassName(classArray[i])
    if (elements[0].innerHTML != '') {
        if (elements[0].innerHTML == elements[1].innerHTML && elements[0].innerHTML == elements[2].innerHTML){  
        winner=true;
        if (turnCounter % 2 == 0) {
         document.getElementById('winnerStatus').innerHTML = `${p1Name} Wins!`
        } else {
         document.getElementById('winnerStatus').innerHTML = `${p2Name} Wins!`
        }

        if (currentPlayer == p1Char) {
         P1Score++
         document.getElementById('p1s').innerHTML = `P1 Score = ${P1Score}`
        } else {
         P2Score++
         document.getElementById('p2s').innerHTML = `P2 Score = ${P2Score}`
        }
  }
  }
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
document.getElementById('winnerStatus').innerHTML = 'Winner Declaration'
turnCounter = 0;

for (let i = 1; i<10; i++){
document.getElementById(i).innerHTML = '';
}
p1Char = document.getElementById('xCharacter').value
p2Char = document.getElementById('oCharacter').value
p1Name = document.getElementById('p1Name').value
p2Name = document.getElementById('p2Name').value
currentPlayer = p1Char;
document.getElementById("instructions-container").style.visibility = 'visible'
}

// function cursor() {

//    if(currentPlayer == p1Char){
//        document.getElementsByTagName("body")[0].style.cursor = "url('X cursor.png'), auto";
//    }else{
//        document.getElementsByTagName("body")[0].style.cursor = "url('O cursor.png'), auto";
//    }
//    }

document.getElementById('close').addEventListener('click',close)