let userScore = 0;
let compScore = 0;

const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
const resetBtn = document.querySelector("#reset");
const choices = document.querySelectorAll(".choice");

const options = ["rock", "paper", "scissor"];

const setMessage = (text, bg = "darkslategray") => {
  msg.innerText = text;
  msg.style.backgroundColor = bg;
};

const genCompChoice = () => {
  const randIdx = Math.floor(Math.random() * options.length);
  return options[randIdx];
};

const getResult = (userChoice, compChoice) => {
  if (userChoice === compChoice) return "draw";

  const winsAgainst = {
    rock: "scissor",
    paper: "rock",
    scissor: "paper",
  };

  return winsAgainst[userChoice] === compChoice ? "win" : "lose";
};

const flashPicked = (id) => {
  choices.forEach((c) => c.classList.remove("picked"));
  const picked = document.getElementById(id);
  if (!picked) return;
  picked.classList.add("picked");
  setTimeout(() => picked.classList.remove("picked"), 250);
};

const playGame = (userChoice) => {
  const compChoice = genCompChoice();
  const result = getResult(userChoice, compChoice);

  flashPicked(userChoice);

  if (result === "draw") {
    setMessage(`Draw! You both chose ${userChoice}.`, "darkslategray");
    return;
  }

  if (result === "win") {
    userScore++;
    userScorePara.innerText = userScore;
    setMessage(`You won! ${userChoice} beats ${compChoice}.`, "green");
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    setMessage(`You lost! ${compChoice} beats ${userChoice}.`, "crimson");
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => playGame(choice.id));
});

resetBtn.addEventListener("click", () => {
  userScore = 0;
  compScore = 0;
  userScorePara.innerText = "0";
  compScorePara.innerText = "0";
  setMessage("Scores reset. Play your move!");
});

// ✅ Keyboard support: R/P/S to play, Enter to reset
document.addEventListener("keydown", (e) => {
  const key = e.key.toLowerCase();
  if (key === "r") playGame("rock");
  if (key === "p") playGame("paper");
  if (key === "s") playGame("scissor");
  if (key === "enter") resetBtn.click();
});

// Initial message (instead of alert)
setMessage("Welcome! Tap an icon to play.");
