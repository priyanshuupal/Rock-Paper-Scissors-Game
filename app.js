alert("play game by clicking on icons");
let userScore = 0;
let compScore = 0;
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const choices = document.querySelectorAll(".choice");
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
    //playGame(userChoice);
});

const genCompChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randIdx = Math.floor(Math.random() * 3);

    return options[randIdx];
}

const drawGame = () => {
    msg.innerText = `Game Draw`;
    msg.style.backgroundColor = "darksLateGray";
}

const showWinner = (userwin, userChoice, compChoice) => {
    if (userwin) {
        userScore++;
        msg.innerText = `You Won! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
        userScorePara.innerText = userScore;
    } else {
        compScore++;
        // console.log("You Lose");
        msg.innerText = `You Lose. ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
        compScorePara.innerText = compScore;
    }
}

// const finishGame = () => {
//     if(userScorePara && compScorePara === 10){
//         choice.disabled;
//     }
// }

const playGame = (userChoice) => {

    const compChoice = genCompChoice();


    if (userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = compChoice === "scissor" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }

        showWinner(userWin, userChoice, compChoice);
        // finishGame();
    }

};