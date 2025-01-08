let p1= 'X';
let p2= 'O';
let currentPlayer = p1;
let winner = '';
let turnCounter = 0;
let classArray = ['col1', 'col2', 'col3', 'row1', 'row2', 'row3', 'dia1', 'dia2'];
let P1Score = 0;
let P2Score = 0;

// cursor()
/********************* Function handles the player input and places mark on board. This may be completed as more than one function if you choose ********************************/
function playerMove(boxNum) {

if (winner == '') {
   if (document.getElementById(boxNum).innerHTML == ''){

   if (currentPlayer == p1) {
      document.getElementById(boxNum).innerHTML = p1;
   } else {
      document.getElementById(boxNum).innerHTML = p2;
   }
   
 checkWinner()
//  alert(currentPlayer)
 turnCounter++
 if (turnCounter >= 9 && winner == '') {
   document.getElementById('winnerStatus').innerHTML = "It's a Tie!"
   setTimeout(resetGame, 4000)
   }

   if (currentPlayer == p1) {
    currentPlayer = p2;
   } else {
    currentPlayer = p1;
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
        winner=currentPlayer;
        
        document.getElementById('winnerStatus').innerHTML = `Player ${currentPlayer} Wins!`

        if (currentPlayer == p1) {
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

/********************* Function resets the game board ********************************/
function resetGame() {
currentPlayer = p1;
winner = '';
document.getElementById('winnerStatus').innerHTML = 'Winner Declaration'
turnCounter = 0;
for (let i = 1; i<10; i++){
document.getElementById(i).innerHTML = '';
}
}

// function cursor() {

//    if(currentPlayer == p1){
//        document.getElementsByTagName("body")[0].style.cursor = "url('X cursor.png'), auto";
//    }else{
//        document.getElementsByTagName("body")[0].style.cursor = "url('O cursor.png'), auto";
//    }
//    }