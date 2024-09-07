
//Player 1 Dice Image

var randomNumber1 = Math.floor(Math.random() * 6) + 1; // (1-6)

var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png-dice6.png

var randomImageSource = "images/" + randomDiceImage; //images/dice1.png-imgages/dice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);

//Player 2 Dice Image

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src" , randomImageSource2);

//Player 1 Wins
if (randomNumber1 > randomNumber2) {

    document.querySelector("h1").innerHTML = " 🚩Player 1 Wins!";
//Player 2 wins
} else if (randomNumber1 < randomNumber2) {

    document.querySelector("h1").innerHTML = " 🚩Player 2 Wins!";
//Its a draw
} else {
     document.querySelector("h1").innerHTML = " 🏳️Its a Tie!🏳️";
}