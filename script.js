const playBtn = document.querySelector('.play-btn');
const body = document.querySelector('body');

function mouse(e) {
    if (e.type == "mouseover") {
        this.classList.remove('play-btn');
        this.classList.add('play-btn-hover');
        e.stopPropagation();
    } else if (e.type == "mouseout") {
        this.classList.remove('play-btn-hover');
        this.classList.add('play-btn');
        e.stopPropagation();
    } else if (e.type == "mousedown") {
        this.classList.remove('play-btn-hover');
        this.classList.add('play-btn-click');
        e.stopPropagation();
    } else if (e.type == "mouseup") {
        this.classList.remove('play-btn-click');
        this.classList.add('play-btn-hover');
        e.stopPropagation();
    }
}

playBtn.addEventListener('mouseover', mouse);
playBtn.addEventListener('mouseout', mouse);
playBtn.addEventListener('mousedown', mouse);
playBtn.addEventListener('mouseup', mouse);
















/*let play = ["ROCK", "PAPER", "SCISSORS"];

function computerPlay() {
    let randomNum = Math.floor(Math.random() * 3);
    let randomPlay = play[randomNum];
    return randomPlay;
}

let computerScore = 0;
let userScore = 0;

function playRound() {
    let userPrompt = prompt("Rock, Paper, or Scissors?");

    let computer = computerPlay();
    console.log("Computer played: " + computer);
    let user = userPrompt.toUpperCase();
    console.log("You played: " + user);

    if (user === "ROCK") {
        if (computer === "SCISSORS") {
            console.log("Rock beats scissors!");
            userScore += 1;
            console.log("Your score: " + userScore);
            return userScore;
        } else if (computer === "PAPER") {
            console.log("Paper beats rock!");
            computerScore += 1;
            console.log("Your score: " + userScore);
            return computerScore;
        } else if (computer === "ROCK") {
            console.log("It's a tie!");
            alert("Click OK/or hit ENTER for rematch: ");
            playRound();
        }
    }
    if (user === "PAPER") {
        if (computer === "ROCK") {
            console.log("Paper beats rock!");
            userScore += 1;
            console.log("Your score: " + userScore);
            return userScore;
        } else if (computer === "SCISSORS") {
            console.log("Scissors beats paper!");
            computerScore += 1;
            console.log("Your score: " + userScore);
            return computerScore;
        } else if (computer === "PAPER") {
            console.log("It's a tie!");
            alert("Click OK/or hit ENTER for rematch: ");
            playRound();
        }
    }
    if (user === "SCISSORS") {
        if (computer === "PAPER") {
            console.log("Scissors beats paper!");
            userScore += 1;
            console.log("Your score: " + userScore);
            return userScore;
        } else if (computer === "ROCK") {
            console.log("Rock beats scissors!");
            computerScore += 1;
            console.log("Your score: " + userScore);
            return computerScore;
        } else if (computer === "SCISSORS") {
            console.log("It's a tie!")
            alert("Click OK/or hit ENTER for rematch: ");
            playRound();
        }
    }

    return userScore;
}

function game() {
    for (i = 0; i < 5; i++) {
        playRound();
        console.log("");
    }
    console.log(`Computer Total Score: ${5 - userScore}
    Your Total Score: ${userScore}`);
    console.log('');

    if (userScore < 3) {
        console.log("You lose.");
    } else if (userScore >= 3) {
        console.log("You Win!");
    }
}

game();
*/