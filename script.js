"use strict";
const changeBtn = document.querySelector(".generate");
const colorTitle = document.querySelector("#color-tag");

const hexArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
let hexCode = "";
let lastCode = "";

const generateColor = function () {
  do {
    hexCode = "";
    for (let i = 0; i < 6; i++) {
      hexCode += hexArr[Math.floor(Math.random() * hexArr.length)];
    }
  } while (hexCode === "" || hexCode === lastCode);

  lastCode = hexCode;
  updateTxt(hexCode);
  changeBg(hexCode);

  // Contrast
  const red = parseInt(hexCode.substring(0, 2), 16);
  const green = parseInt(hexCode.substring(2, 4), 16);
  const blue = parseInt(hexCode.substring(4), 16);
  // i could have written this in one line of AVG but i want people to really understand the logic
  const avg = (red + green + blue) / 3;

  if (avg > 128) {
    document.body.style.color = "#000000";
  } else {
    document.body.style.color = "#ffffff";
  }
};

const updateTxt = function (code) {
  colorTitle.innerHTML = `#${code}`;
};
const changeBg = function (code) {
  document.body.style.backgroundColor = `#${code}`;
};

changeBtn.addEventListener("click", generateColor);
