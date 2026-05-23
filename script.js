function getComputerChoice(max){
    return  Math.floor(Math.random() * max);
}

function ComputerTurn(number){
    if(number === 0){
        return "rock";
    } else if(number === 1){
        return "paper";
    }
    else if (number === 2){
        return "scissors";
    }
}

function getHumanChoice(){
    return prompt("Enter your choice: rock, paper, or scissors");
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){
    if(humanChoice === computerChoice){
        return "It's a tie!";
    } else if(
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "rock")
    ){
        humanScore++;
        return `You win! ${humanChoice} beats ${computerChoice}`;
    } else {
        computerScore++;
        return `You lose! ${computerChoice} beats ${humanChoice}`;
    }
}
for(let i = 0; i < 5; i++){
    const humanSelection = getHumanChoice().toLowerCase();
    const computerSelection = ComputerTurn(getComputerChoice(3));
    console.log(playRound(humanSelection, computerSelection));
}
console.log(`Final Score - You: ${humanScore}, Computer: ${computerScore}`);



