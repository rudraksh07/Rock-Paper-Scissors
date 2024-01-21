let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const uScore = document.querySelector("#user-score");
const cScore = document.querySelector("#comp-score");
const genCompChoice = () => {
    //rock,paper,scissors
    const options = ["rock", "scissors", "paper"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};
const drawGame = () => {
    msg.innerText = "Draw";
    msg.style.backgroundColor = "#081b31";

};
const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
        uScore.innerText = userScore;
    }
    else {
        compScore++;
        msg.innerText = `You lose ${compChoice} beats  your ${userChoice}`;
        msg.style.backgroundColor = "red";

        cScore.innerText = compScore;
    }
};
const playGame = (userChoice) => {
    //Generate computer choice -> modular
    const compChoice = genCompChoice();
    if (userChoice === compChoice) {
        drawGame();
    }
    else {
        let userWin = true;
        if (userChoice === "rock") {
            // scissors , paper 
            userWin = compChoice === "paper" ? false : true;
        }
        else if (userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        }
        else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});