"use strict";

const roll = document.querySelector(".roll");
const hold = document.querySelector(".hold");
const img = document.querySelector(".die");
const currNum1 = document.querySelector(".current-number-1");
const currNum2 = document.querySelector(".current-number-2");

roll.addEventListener("click", function () {
  const rand = Math.floor(Math.random() * 6) + 1;
  switch (rand) {
    case rand:
      img.innerHTML = `<img src="images/${rand}-die.png" alt="" /></div>`;
      currNum1.textContent = `${rand}`;
      break;
  }
});
