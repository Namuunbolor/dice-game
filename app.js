//Toglogchiin eeljiig hadgalah huvisagch
var activePlayer = 1;

//Toglogchdiin tsugluulsan onoog hadgalah huvisagch
var scores = [0, 0];

//Toglogchiin eeljindee tsugluulj baigaa onoog tsugluulah huvisagch
var roundScore = 0;

//Shoonii ali talaaraa buusniig hadgalah huvisagch(random)
var dice = Math.floor(Math.random() * 6) + 1;

window.document.querySelector("#score-0").textContent = 0;

window.document.querySelector("#score-1").textContent = 0;
window.document.querySelector("#current-0").textContent = 0;
window.document.querySelector("#current-1").textContent = 0;

document.querySelector(".dice").style.display = "none";

console.log("Shoo :" + dice);
