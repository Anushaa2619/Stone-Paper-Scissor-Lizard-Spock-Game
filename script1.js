let userScore = 0;
let computerScore = 0;

const userScorePara = document.querySelector("#user-score");
const computerScorePara = document.querySelector("#computer-score");
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        let userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

const playGame = (userChoice) => {
    const computerChoice = genComputerChoice();

    if(userChoice === computerChoice) {
        drawGame();
       
    } else {
        let userWin = true;
        if(userChoice === "rock" && computerChoice === "paper") {
            userWin = false; 
           
        } else if(userChoice === "paper" && computerChoice === "scissors") {
            userWin = false;
            
        } else if (userChoice === "lizard" && computerChoice === "rock") {
            userWin = false;
            
        } else if(userChoice === "spock" && computerChoice === "lizard") {
            userWin = false;
            
        } else if (userChoice === "scissors" && computerChoice === "spock") {
            userWin = false;
           
        } else if(userChoice === "lizard" && computerChoice === "scissors") {
            userWin = false;
       
        } else if (userChoice === "paper" && computerChoice === "lizard") {
            userWin = false;
         
        } else if(userChoice === "spock" && computerChoice === "paper") {
            userWin = false;
        
        } else if (userChoice === "rock" && computerChoice === "spock") {
            userWin = false;
         
        } else if(userChoice === "scissors" && computerChoice === "rock") {
            userWin = false;
           
        } else {
            userWin = true;
           
        }
        showWinner(userWin, userChoice, computerChoice);
    }
};

const genComputerChoice = () => {
    let options = ["rock","paper", "scissors", "lizard", "spock"];
    const index = Math.floor(Math.random() * 5);
    return options[index];
};

const drawGame = () => {
    msg.innerText = "Game was draw";
    msg.style.backgroundColor = "bisque";
};

const showWinner = (userWin, userChoice, computerChoice) => {
    if(userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win! Your ${userChoice} beats ${computerChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        computerScore++;
        computerScorePara.innerText = computerScore;
        msg.innerText = `You lose! ${computerChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};