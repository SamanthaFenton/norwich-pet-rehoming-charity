"use strict";
console.log("sheet-one");

const welcome = alert("Welcome to Norpet, Norwich's specialist local animal adoption and rehoming charity");
console.log(welcome);

let user = prompt("Please tell me your name?").toLowerCase();
console.log(user);

const greet = alert("Thanks " + user + " , please personalise your experience by selecting a theme for the website.");
console.log(greet);

let lightMode = false;

document.getElementById("lightButton").addEventListener("click", enterLightMode);

document.getElementById("darkButton").addEventListener("click", enterDarkMode);

function enterLightMode() {
  let body = document.body;
  let welcome = document.getElementById("welcome");
  let button = document.getElementById("lightButton");
  body.classList.remove("dark");
  welcome.classList.remove("dark");
  body.classList.add("light");
  welcome.classList.add("light");
  button.setAttribute("checked", "checked");

  lightMode = true;

  saveMode();
}

function enterDarkMode() {
  let body = document.body;
  let welcome = document.getElementById("welcome");
  let button = document.getElementById("darkButton");
  body.classList.remove("light");
  welcome.classList.remove("light");
  body.classList.add("dark");
  welcome.classList.add("dark");
  button.setAttribute("checked", "checked");

  lightMode = false;

  saveMode();
}
function saveMode() {
  let mode = JSON.stringify(lightMode);
  localStorage.setItem("lightMode", mode);
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
