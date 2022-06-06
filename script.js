"use strict";

const roll = document.querySelector(".roll");
const hold = document.querySelector(".hold");
const img = document.querySelector(".die");
const currNum1 = document.querySelector(".current-number-1");
const currNum2 = document.querySelector(".current-number-2");
const leftHighlight = document.querySelector(".left");
const rightHighlight = document.querySelector(".right");
const num1 = document.querySelector(".num1");
const num2 = document.querySelector(".num2");
const die = document.querySelector(".die");
const newGame = document.querySelector(".new");
let currentTotal1 = 0;
let currentTotal2 = 0;
let currentPlayer = 1;
let bank1 = 0;
let bank2 = 0;

const switchTurn = function () {
  currentPlayer++;
  if (currentPlayer % 2 == 0) {
    rightHighlight.style.backgroundColor = "rgb(255, 255, 255, 0.55)";
    leftHighlight.style.backgroundColor = "rgb(255, 255, 255, 0.3)";
  } else {
    leftHighlight.style.backgroundColor = "rgb(255, 255, 255, 0.55)";
    rightHighlight.style.backgroundColor = "rgb(255, 255, 255, 0.3)";
  }
};
roll.addEventListener("click", function () {
  const rand = Math.floor(Math.random() * 6) + 1;
  die.classList.remove("hidden");
  let currentUpdate1 = function () {
    currentTotal1 += rand;
    img.innerHTML = `<img src="images/${rand}-die.png" alt="" /></div>`;
    currNum1.textContent = `${currentTotal1}`;
  };
  let currentUpdate2 = function () {
    currentTotal2 += rand;
    img.innerHTML = `<img src="images/${rand}-die.png" alt="" /></div>`;
    currNum2.textContent = `${currentTotal2}`;
  };
  if (currentPlayer % 2 != 0) {
    if (rand == 1) {
      img.innerHTML = `<img src="images/${rand}-die.png" alt="" /></div>`;
      currentTotal1 = 0;
      currNum1.textContent = `${currentTotal1}`;
      switchTurn();
    } else {
      currentUpdate1();
    }
  } else {
    if (rand == 1) {
      img.innerHTML = `<img src="images/${rand}-die.png" alt="" /></div>`;
      currentTotal2 = 0;
      currNum2.textContent = `${currentTotal2}`;
      switchTurn();
    } else {
      currentUpdate2();
    }
  }
});

hold.addEventListener("click", function () {
  if (currentPlayer % 2 != 0) {
    bank1 += currentTotal1;
    num1.textContent = `${bank1}`;
    currentTotal1 = 0;
    currNum1.textContent = `${currentTotal1}`;

    if (bank1 >= 100) {
      leftHighlight.style.backgroundColor = "rgba(27, 27, 27, 0.3)";
      document.querySelector(".player-1").style.color = "#FFFFFF";
      document.querySelector(".player-1").style.fontWeight = "600";
    }
  } else {
    bank2 += currentTotal2;
    num2.textContent = `${bank2}`;
    currentTotal2 = 0;
    currNum2.textContent = `${currentTotal2}`;

    if (bank2 >= 100) {
      rightHighlight.style.backgroundColor = "rgba(27, 27, 27, 0.3)";
      document.querySelector(".player-2").style.color = "#FFFFFF";
      document.querySelector(".player-2").style.fontWeight = "600";
    }
  }
  switchTurn();
});

newGame.addEventListener("click", function () {
  currentTotal1 = 0;
  currNum1.textContent = `${currentTotal1}`;
  currentTotal2 = 0;
  currNum2.textContent = `${currentTotal2}`;
  bank1 = 0;
  num1.textContent = `${bank1}`;
  bank2 = 0;
  num2.textContent = `${bank2}`;
  if (currentPlayer % 2 == 0) {
    switchTurn();
  }
  currentPlayer = 1;
  document.querySelector(".player-2").style.color = "#1f1f1fF";
  document.querySelector(".player-2").style.fontWeight = "500";
  document.querySelector(".player-1").style.color = "#1f1f1fF";
  document.querySelector(".player-1").style.fontWeight = "500";
  die.classList.add("hidden");
});
