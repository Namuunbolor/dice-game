//Toglogchiin eeljiig hadgalah huvisagch
var activePlayer = 1;

//Toglogchdiin tsugluulsan onoog hadgalah huvisagch
var scores = [0, 0];

//Toglogchiin eeljindee tsugluulj baigaa onoog tsugluulah huvisagch
var roundScore = 0;

//Shoonii ali talaaraa buusniig hadgalah huvisagch(random)
var diceNumber = Math.floor(Math.random() * 6) + 1;

document.getElementById("score-0").textContent = "0";
document.getElementById("score-1").textContent = "0";
document.getElementById("current-0").textContent = "0";
document.getElementById("current-1").textContent = "0";

var diceDom = document.querySelector(".dice");
diceDom.style.display = "none";

document.querySelector(".btn-roll").addEventListener("click", function () {
  var diceNumber = Math.floor(Math.random() * 6) + 1;
  diceDom.style.display = "block";
  diceDom.src = "dice-" + diceNumber + ".png";
});

console.log("Shoo :" + dice);
