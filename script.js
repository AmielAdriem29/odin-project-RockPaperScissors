//console.log("Hello world!")

function getComputerChoice(){
    let number = (Math.ceil(Math.random()*3));
    switch(number){
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors";
    }
}

console.log(getComputerChoice())