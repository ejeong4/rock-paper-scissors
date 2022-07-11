//Initialize variables
const computer = document.querySelector('#computer');
const header = document.querySelector('#h1');
const rock = document.querySelector('.button1');
const paper = document.querySelector('.button2');
const scissors = document.querySelector('.button3');
const score = document.querySelector('#score');
const again = document.querySelector('#again');
const buttons = document.querySelectorAll('button');

//Initialize computer plays
let plays = ['✊', '🖐', '✌️'];

//Random number function
function randNum() {
    let num = Math.floor(Math.random() * 3)
    return num;
}

//Initialize scores to 0
let playerScore = 0;
let computerScore = 0;

//Determine winner
function game() {

    //Check if less than 5 games
    if (computerScore < 5 && playerScore < 5) {

        //Initialize computer variable
        let computerNum = randNum();

        //Compare user and computer plays
        if ((this == rock && computerNum == 1) ||
            (this == paper && computerNum == 2) ||
            (this == scissors && computerNum == 0)) {
            header.textContent = "You lost this round";
            computerScore += 1;
        } else if ((this == rock && computerNum == 2) ||
            (this == paper && computerNum == 0) ||
            (this == scissors && computerNum == 1)) {
            header.textContent = "You won this round!";
            playerScore += 1;
        } else if ((this == rock && computerNum == 0) ||
            (this == paper && computerNum == 1) ||
            (this == scissors && computerNum == 2)) {
            header.textContent = "Tie!";
        }
        //Display computer play
        computer.textContent = `${plays[computerNum]}`;


        //Display score
        score.textContent = `Computer Score: ${computerScore}
    Your Score: ${playerScore}`;
    }
    //End game after first to 5
    else if (computerScore == 5) {
        header.textContent = "That's game! Better luck next time.";
        again.textContent = "Reload to play again";
    } else if (playerScore == 5) {
        header.textContent = "That's game! Congrats on the win!";
        again.textContent = "Reload to play again";
    }

}

function mouse(e) {
    if (e.type == 'mouseover') {
        this.classList.add('button-on');
    } else if (e.type == 'mouseout') {
        this.classList.remove('button-on');
    } else if (e.type == "mousedown") {
        this.classList.add('button-down');
    } else if (e.type == "mouseup") {
        this.classList.remove('button-down');
    }
}

//Call game function

rock.addEventListener('click', game);
paper.addEventListener('click', game);
scissors.addEventListener('click', game);


//Call mouse function

rock.addEventListener('mouseover', mouse);
rock.addEventListener('mouseout', mouse);
rock.addEventListener('mousedown', mouse);
rock.addEventListener('mouseup', mouse);

paper.addEventListener('mouseover', mouse);
paper.addEventListener('mouseout', mouse);
paper.addEventListener('mousedown', mouse);
paper.addEventListener('mouseup', mouse);

scissors.addEventListener('mouseover', mouse);
scissors.addEventListener('mouseout', mouse);
scissors.addEventListener('mousedown', mouse);
scissors.addEventListener('mouseup', mouse);