// create mole element to utilize for functions.
//need to add classlist to not repeat code.
const mole = document.createElement("img");
mole.src = "images/mole.png";
mole.classList.add("mole");
let holes = document.querySelectorAll(".hole");
let num = 1;
//fix bug( able to click anywhere on page to score a point)
let score = 0;

// Generate functions number 1 to 9 and puts the mole in a hole from 1 to 9

function putMole() {
  for (let i = 0; i < holes.length; i++) {
    if (i == num) {
      holes[i].appendChild(mole);
    }
  }
}

function pickHole() {
  num = Math.floor(Math.random() * 9);
}
putMole();

//Create score tracker that updates for game.
function updateScore() {
  let scoreBoard = document.querySelector(".score");
  scoreBoard.innerText = "Score: " + score;
}

//Need something to update the score when clicking on mole.
//Use if statement to make sure picking on mole is only way to add score.
for (let i = 0; i < holes.length; i++) {
  holes[i].addEventListener("click", () => {
    if (i == num) {
      pickHole();
      putMole();
      score++;
      updateScore();
    }
  });
}
