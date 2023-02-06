/**DOM elements */
const buttons = document.getElementsByClassName("control");
const Playerscore = document.getElementById("player-score");
const Computerscore = document.getElementById("computer-score");
const PlayerImage = document.getElementById("player-image");
const ComputerImage = document.getElementById("computer-image");
const message = document.getElementById("messages");
const choices = ["rock", "paper", "scissors"];

/**buttons*/
for (let button of buttons) {
  button.addEventListener("click", function () {
    letPlayerChoice= this.getAttribute (data-choice);
    playGame(playerchoice);
  });
}


