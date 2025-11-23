//console.log("Hello world!")

function getComputerChoice(){
    let number = (Math.ceil(Math.random()*3));
    return number;
}

function getHumanChoice(){
    let choice = String(prompt())
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

const humanSelection = getHumanChoice()
const computerSelection = getComputerChoice()

function playRound(humanSelection = getHumanChoice(), computerSelection = getComputerChoice()){
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

    switch(p1){
        case 1:
            console.log("Human: rock");
            break;
        case 2:
            console.log("Human: paper");
            break;
        case 3:
            console.log("Human: scissors");
            break;
    }

    switch(p2){
        case 1:
            console.log("Computer: rock");
            break;
        case 2:
            console.log("Computer: paper");
            break;
        case 3:
            console.log("Computer: scissors");
            break;
    }

    console.log("Human: "  + humanScore  + "\n" + "Computer: " + computerScore)

}

function playGame(){
    for(i=1; i<=5; i++){
        console.log("\nRound: " + i);
        playRound()
    }
    if (humanScore > computerScore) console.log("Human Wins!")
    else if (humanScore < computerScore) console.log("Computer Wins!")
    else console.log("It's a tie!")
}

playGame()