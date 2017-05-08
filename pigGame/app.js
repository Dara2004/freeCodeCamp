/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var dice, activePlayer, roundScore, totalScore, gamePlaying, winner;

init();
//make the dice disappear when starting the game
function init() {
    gamePlaying = true;
    activePlayer = 0;
    roundScore = 0;
    totalScore = [0, 0];
    document.querySelector(".dice").style.display = 'none';
    document.querySelector("#score-0").innerHTML = "0";
    document.querySelector("#score-1").innerHTML = "0";
    document.querySelector("#current-0").innerHTML = "0";
    document.querySelector("#current-1").innerHTML = "0";
    document.querySelector("#name-0").innerHTML = "Player1";
    document.querySelector("#name-1").innerHTML = "Player2";

}

//make the roll dice button works
document.querySelector(".btn-roll").addEventListener("click", function () {
    if (gamePlaying === true) {
        dice = Math.floor(Math.random() * 6 + 1); //dice should be included here so that whenever the click action is detected, dice will be recalculated 
        document.querySelector(".dice").style.display = "block";
        document.querySelector(".dice").src = "dice-" + dice + ".png";
        if (dice !== 1) {
            roundScore += dice;
            document.querySelector("#current-" + activePlayer).innerHTML = roundScore;
        } else {
            roundScore = 0;
            document.querySelector("#current-" + activePlayer).innerHTML = "0";
            //next player
            nextPlayer();
        }
    }
})

//make the "hold" btn work
document.querySelector(".btn-hold").addEventListener("click", function () {
    if (gamePlaying === true) {
        totalScore[activePlayer] += roundScore;
        document.querySelector("#score-" + activePlayer).innerHTML = totalScore[activePlayer];
        if (totalScore[activePlayer] < 20) {
            document.querySelector("#current-" + activePlayer).innerHTML = "0";
            roundScore = 0;
            nextPlayer();
        } else {
            document.querySelector("#name-" + activePlayer).innerHTML = "Winner!";
            gamePlaying = false;
        }
    }

})


function nextPlayer() {
    //switch the active player when a player hits 1 
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0; //switch/ternary operator 
    document.querySelector(".player-0-panel").classList.toggle("active"); //toggle btw hide and show of "active" class 
    document.querySelector(".player-1-panel").classList.toggle("active");
}

//set the var to 0 after the game ends


//make the "new game" button work
document.querySelector(".btn-new").addEventListener("click", init);
