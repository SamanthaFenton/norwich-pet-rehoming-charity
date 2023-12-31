"use strict";
console.log("sheet-one");

let lightMode = false;

document.getElementById("lightButton").addEventListener("click", enterLightMode);

document.getElementById("darkButton").addEventListener("click", enterDarkMode);

let body = document.body;

function enterLightMode() {
  let button = document.getElementById("lightButton");
  body.classList.remove("dark");

  body.classList.add("light");

  button.setAttribute("checked", "checked");

  lightMode = true;

  saveMode();
}

function enterDarkMode() {
  let button = document.getElementById("darkButton");
  body.classList.remove("light");

  body.classList.add("dark");

  button.setAttribute("checked", "checked");

  lightMode = false;

  saveMode();
}
function saveMode() {
  localStorage.setItem("lightMode", lightMode);
}

function pageLoad() {
  let storedMode = JSON.parse(localStorage.getItem("lightMode"));
  console.log(storedMode);

  if (storedMode === null) {
    console.log("null");
    return;
  }

  if (storedMode === false) {
    console.log("dark");
    enterDarkMode();
  } else if (storedMode) {
    console.log("light");
    enterLightMode();
  }
}
pageLoad();
