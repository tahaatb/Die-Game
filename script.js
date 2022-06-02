"use strict";

const roll = document.querySelector(".roll");
const hold = document.querySelector(".hold");
const img = document.querySelector(".die");
const currNum1 = document.querySelector(".current-number-1");
const currNum2 = document.querySelector(".current-number-2");
const leftHighlight = document.querySelector(".left");
const rightHighlight = document.querySelector(".right");
let currentTotal1 = 0;
let currentTotal2 = 0;
let currentPlayer = 1;

roll.addEventListener("click", function () {
  const rand = Math.floor(Math.random() * 6) + 1;
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
      currentPlayer++;
      img.innerHTML = `<img src="images/${rand}-die.png" alt="" /></div>`;
      currNum1.textContent = `${currentTotal1}`;
    } else {
      currentUpdate1();
    }
    leftHighlight.style.backgroundColor = "rgb(255, 255, 255, 0.55)";
    rightHighlight.style.backgroundColor = "rgb(255, 255, 255, 0.33)";
  } else {
    if (rand == 1) {
      currentPlayer++;
      img.innerHTML = `<img src="images/${rand}-die.png" alt="" /></div>`;
      currNum1.textContent = `${currentTotal1}`;
    } else {
      currentUpdate2();
    }
    rightHighlight.style.backgroundColor = "rgb(255, 255, 255, 0.55)";
    leftHighlight.style.backgroundColor = "rgb(255, 255, 255, 0.33)";
  }
});
