/**DOM elements */
let Result = 0;
let computerResult = 0
const buttons = document.getElementsByClassName("control");
const Playerscore = document.getElementById("player-score");
const Computerscore = document.getElementById("computer-score");
const PlayerImage = document.getElementById("player-image");
const ComputerImage = document.getElementById("computer-image");
const message = document.getElementById("messages");
let rock = document.getElementById("Rock")
let paper = document.getElementById("Paper")
let scissors = document.getElementById("Scissors")
const choices = ["rock", "paper", "scissors"]
  
/**Computer will pick random number*/
function initiateComputerSelection ()
const options = ["rock", "paper", "scissors"]
let computerChoice = Math.Floor(Math.Random() * 3);

/** 
* WIN Function that will run if the player/user has won. It also adds a class for extra visibility on a winner/loser and updates the current score.
*/
function win(userSelection, computerSelection) {
   playerScore++;
   playerScoreNumber.innerHTML = playerScore;
   computerResultNumber.innerHTML = computerScore;
   nameAnnouncement.innerHTML = "YOU WIN";
   scoreAnnouncement.innerHTML = `${userSelection} beat ${computerSelection}`;
   document.getElementById(userSelection).classList.add("win-effect");
   document.getElementById(computerSelection).classList.add("lose-effect");
   document.getElementById("player").classList.add("win-effect");
   document.getElementById("computer").classList.add("lose-effect");
   setTimeout(function () {
       document.getElementById(userSelection).classList.remove("win-effect", "lose-effect", "draw-effect");
   }, 1000); //TIMEOUT FUNCTION FOR CLICKABLE ELEMENTS
   setTimeout(function () {
       document.getElementById(computerSelection).classList.remove("win-effect", "lose-effect", "draw-effect");
   }, 1000); //TIMEOUT FUNCTION FOR CLICKABLE ELEMENTS

   setTimeout(function () {
       document.getElementById("player").classList.remove("win-effect", "lose-effect");
   }, 1000); // TIMEOUT FUNCTION FOR SCORE/RESULT AT THE BOTTOM OF THE PAGE
   setTimeout(function () {
       document.getElementById("computer").classList.remove("win-effect", "lose-effect");
   }, 1000); // TIMEOUT FUNCTION FOR SCORE/RESULT AT THE BOTTOM OF THE PAGE
}

/**
* LOSE Function that will run if the computer won a round. It also adds a class for extra visibility on a winner/loser and updates the current score.
*/
function lose(userSelection, computerSelection) {
   computerResult++;
   computerResultNumber.innerHTML = computerResult;
   playerResultNumber.innerHTML = playerResult;
   nameAnnouncement.innerHTML = "Computer Won";
   scoreAnnouncement.innerHTML = `${computerSelection} beat ${userSelection}`;
   document.getElementById(computerSelection).classList.add("win-effect");
   document.getElementById(userSelection).classList.add("lose-effect");
   document.getElementById("computer").classList.add("win-effect");
   document.getElementById("player").classList.add("lose-effect");
   setTimeout(function () {
       document.getElementById(userSelection).classList.remove("win-effect", "lose-effect", "draw-effect");
   }, 1000); //TIMEOUT FUNCTION FOR CLICKABLE ELEMENTS
   setTimeout(function () {
       document.getElementById(computerSelection).classList.remove("win-effect", "lose-effect", "draw-effect");
   }, 1000); //TIMEOUT FUNCTION FOR CLICKABLE ELEMENTS

   setTimeout(function () {
       document.getElementById("player").classList.remove("win-effect", "lose-effect");
   }, 1000); // TIMEOUT FUNCTION FOR SCORE/RESULT AT THE BOTTOM OF THE PAGE
   setTimeout(function () {
       document.getElementById("computer").classList.remove("win-effect", "lose-effect");
   }, 1000); // TIMEOUT FUNCTION FOR SCORE/RESULT AT THE BOTTOM OF THE PAGE
}

/**
* DRAW Function that will run only if both player and computer selected the same element. It also adds a class for extra visibility.
*/
function draw(userSelection, computerSelection) {
   nameAnnouncement.innerHTML = "It's a Draw ";
   scoreAnnouncement.innerHTML = "You Are Both Equal. Try again!";
   document.getElementById(computerSelection).classList.add("draw-effect");
   document.getElementById(userSelection).classList.add("draw-effect");

   setTimeout(function () {
       document.getElementById(userSelection).classList.remove("win-effect", "lose-effect", "draw-effect");
   }, 1000); //TIMEOUT FUNCTION FOR CLICKABLE ELEMENTS
   setTimeout(function () {
       document.getElementById(computerSelection).classList.remove("win-effect", "lose-effect", "draw-effect");
   }, 1000); //TIMEOUT FUNCTION FOR CLICKABLE ELEMENTS

   setTimeout(function () {
       document.getElementById("player").classList.remove("win-effect", "lose-effect");
   }, 1000); // TIMEOUT FUNCTION FOR SCORE/RESULT AT THE BOTTOM OF THE PAGE
   setTimeout(function () {
       document.getElementById("computer").classList.remove("win-effect", "lose-effect");
   }, 1000); // TIMEOUT FUNCTION FOR SCORE/RESULT AT THE BOTTOM OF THE PAGE
}

/**
* Comparison function with embedded win/lose/draw function. They will initiate after comparison between the values to determine a winner/loser. It uses a user/player clicked value.
*/
function play(userSelection) {
   const computerSelection = initiateComputerSelection();
   if (userSelection + " vs. " + computerSelection === "Rock vs. Scissors" || // Rock beat Scissors
       userSelection + " vs. " + computerSelection === "Paper vs. Rock" || // Paper beat Rock
       userSelection + " vs. " + computerSelection === "Scissors vs. Paper") { //Scissors beat Paper
       win(userSelection, computerSelection);

   } else if (userSelection + " vs. " + computerSelection === "Rock vs. Paper" || //Rock lost against Paper
       userSelection + " vs. " + computerSelection === "Paper vs. Scissors" || // Paper lost against Scissors
       userSelection + " vs. " + computerSelection === "Scissors vs. Rock") { // Scissors lost against Rock
       lose(userSelection, computerSelection);

   } else {
       draw(userSelection, computerSelection); // if both selections are the same, initiate DRAW function
   }
}

/**
* Event listener running in the background and waiting for 'click' event. It's linked to our three elements: Rock,Paper,Scissors. Once they are clicked, it adds the value that user clicked on to 'Play' function.
*/
function main() {
   rock.addEventListener("click", function () {
       play("Rock");
   });
   paper.addEventListener("click", function () {
       play("Paper");
   });
   scissors.addEventListener("click", function () {
       play("Scissors");
   });
}
main();
