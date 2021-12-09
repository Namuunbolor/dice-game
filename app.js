//Toglogchiin eeljiig hadgalah huvisagch
var activePlayer = 0;

//Toglogchdiin tsugluulsan onoog hadgalah huvisagch
var scores = [0, 0];

//Toglogchiin eeljindee tsugluulj baigaa onoog tsugluulah huvisagch
var roundScore = 0;

//Shoonii ali talaaraa buusniig hadgalah huvisagch(random)
var diceNumber = 0;

document.getElementById("score-0").textContent = "0";
document.getElementById("score-1").textContent = "0";
document.getElementById("current-0").textContent = "0";
document.getElementById("current-1").textContent = "0";

var diceDom = document.querySelector(".dice");
diceDom.style.display = "none";

// Shoog shideh event listener
document.querySelector(".btn-roll").addEventListener("click", function () {
  diceNumber = Math.floor(Math.random() * 6) + 1;
  diceDom.style.display = "block";
  diceDom.src = "dice-" + diceNumber + ".png";
  console.log(diceNumber);
  if (diceNumber !== 1) {
    roundScore = roundScore + diceNumber;
    document.getElementById("current-" + activePlayer).textContent = roundScore;
  } else {
    roundScore = 0;
    document.getElementById("current-" + activePlayer).textContent = 0;

    activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);

    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");
    diceDom.style.display = "none";
    //   if (activePlayer === 0) {
    //     activePlayer = 1;
    //   } else {
    //     activePlayer = 0;
    //   }
  }
});
