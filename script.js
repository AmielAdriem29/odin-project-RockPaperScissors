//console.log("Hello world!")

function getComputerChoice(){
    let number = (Math.ceil(Math.random()*3));
    return number;
}

function getHumanChoice(choice){
    switch(choice){
        case "rock":
            return 1;
        case "paper":
            return 2;
        case "scissors":
            return 3;
    }
}


let humanScore = 0;
let computerScore = 0;
// const humanSelection = getHumanChoice(choice)
// const computerSelection = getComputerChoice()

function playRound(humanSelection, computerSelection = getComputerChoice()){
    let p1 = humanSelection
    let p2 = computerSelection



    //Rock vs Paper
    if (p1 == 1 && p2 === 2) computerScore++;
    if (p2 == 1 && p1 === 2) humanScore++;

    //Paper vs Scissors
    if (p1 == 2 && p2 === 3) computerScore++;
    if (p2 == 2 && p1 === 3) humanScore++;

    //Scissors vs Rock
    if (p1 == 3 && p2 === 1) computerScore++;
    if (p2 == 3 && p1 === 1) humanScore++;

    let humanChoice = '';
    let computerChoice = '';

    switch(p1){
        case 1:
            humanChoice = "rock";
            break;
        case 2:
            humanChoice = "paper";
            break;
        case 3:
            humanChoice = "scissors";
            break;
    }

    switch(p2){
        case 1:
            computerChoice = "rock";
            break;
        case 2:
            computerChoice = "paper";
            break;
        case 3:
            computerChoice = "scissors";
            break;
    }

    const scores_container = document.querySelector('#scores-container');
    const scores = document.createElement('div');
    scores.classList.add("scores")
    scores.textContent = `Human: ${humanScore} - ${humanChoice} | Computer: ${computerScore} - ${computerChoice}`;

    scores_container.appendChild(scores);
    return [humanScore, computerScore];
}

function playGame(choice){
    // for(i=1; i<=5; i++){
    //     console.log("\nRound: " + i);
    //     playRound()
    // }
    [humanScore, computerScore] = playRound(getHumanChoice(choice),getComputerChoice())

    const container = document.querySelector('#container');
    const results = document.createElement('div');
    results.classList.add("results")

    if (humanScore == 5 || computerScore == 5){
        if (humanScore > computerScore) {
            results.textContent = "Human wins!"
        }
        else if (humanScore < computerScore){
            results.textContent = "Computer wins!"
        }
        else {
            results.textContent = "It's a tie!"
        }
    }
    container.appendChild(results);
}

const rocks = document.getElementById('rock');
const papers = document.getElementById('paper');
const scissors = document.getElementById('scissors');

rocks.addEventListener('click', () => playGame('rock'));
papers.addEventListener('click', () => playGame('paper'));
scissors.addEventListener('click', () => playGame('scissors'));