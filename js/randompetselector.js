"use strict";
console.log("funky cats");

// global varaibles
// querySelector returns the first element in the document that matches
const petContainer = document.querySelector("section");
const resultsButton = document.querySelector("section + div");
const image1 = document.querySelector("section img:first-child");
const image2 = document.querySelector("section img:nth-child(2)");

let clicks = 0;
const maxClicksAllowed = 9;

let allPets = [];

function getRandomNumber() {
  return Math.floor(Math.random() * allPets.length);
}

function Pet(name, src) {
  this.name = name;
  this.src = src;
  this.clicks = 0;
  this.views = 0;
  allPets.push(this);
}

function renderPets() {
  // we need to generate a number to reference the goat we want to render onto the page
  let pet1 = getRandomNumber();
  let pet2 = getRandomNumber();

  // how could we prevent goat1 being the same number a goat2?
  while (pet1 === pet2) {
    pet2 = getRandomNumber();
  }

  // now we have two random numbers lets set the attributes of our images in the document.
  image1.src = allPets[pet1].src;
  image2.src = allPets[pet2].src;
  image1.alt = allPets[pet1].name;
  image2.alt = allPets[pet2].name;
  allPets[pet1].views++;
  allPets[pet2].views++;
}

function handlePetClick(event) {
  if (event.target === petContainer) {
    alert("Please click on an image");
  } else {
    clicks++;
    // console.log(clicks);
    let clickedPet = event.target.alt;
    for (let i = 0; i < allPets.length; i++) {
      if (clickedPet === allPets[i].name) {
        allPets[i].clicks++;
        break;
      }
    }
    if (clicks === maxClicksAllowed) {
      petContainer.removeEventListener("click", handlePetClick);
      petContainer.className = "no-voting";
      resultsButton.addEventListener("click", renderChart);
      resultsButton.className = "clicks-allowed";
    } else {
      renderPets();
    }
  }
}

function renderResults() {
  console.log("Your results are in!");
  let ul = document.querySelector("ul");
  for (let i = 0; i < allPets.length; i++) {
    let li = document.createElement("li");
    li.textContent = `${allPets[i].name} had ${allPets[i].views} views and was clicked ${allPets[i].clicks} times.`;
    ul.appendChild(li);
  }
}

// const cruising = new Goat("Cruising Goat", "assets/images/cruisin-goat.jpg");
// const float = new Goat("Float Your Goat", "assets/images/float-your-goat.jpg");
// const hand = new Goat("Goat Out of Hand", "assets/images/goat-out-of-hand.jpg");
// const kissing = new Goat("Kissing Goat", "assets/images/kissing-goat.jpg");
// const sassy = new Goat("Sassy Goat", "assets/images/sassy-goat.jpg");
// const smiling = new Goat("Smiling Goat", "assets/images/smiling-goat.jpg");
// const sweater = new Goat("Sweater Goat", "assets/images/sweater-goat.jpg");
// const away = new Goat("Goat Away", "assets/images/goat-away.jpg");

// renderGoats();

petContainer.addEventListener("click", handlePetClick);

function renderChart() {
  const petNames = [];
  const petViews = [];
  const petClicks = [];

  for (let i = 0; i < allPets.length; i++) {
    petNames.push(allPets[i].name);
    petViews.push(allPets[i].views);
    petClicks.push(allPets[i].clicks);
  }

  console.log(petNames);
  console.log(petViews);
  console.log(petClicks);

  const data = {
    labels: petNames,
    datasets: [
      {
        label: "clicks",
        data: petClicks,
        backgroundColor: ["#42032C"],
        borderColor: ["#D36B00"],
        borderWidth: 1,
      },
      {
        label: "views",
        data: petViews,
        backgroundColor: ["#D36B00"],
        borderColor: ["#42032C"],
        borderWidth: 1,
      },
    ],
  };

  const config = {
    type: "bar",
    data: data,
  };

  const petChart = document.getElementById("myChart");
  const myChart = new Chart(petChart, config);
  setLocalStorage();
}

function setLocalStorage() {
  localStorage.setItem("pets", JSON.stringify(allPets));
}

function checkLocalStorage() {
  const localPets = JSON.parse(localStorage.getItem("goats"));
  // console.log(localGoats);
  if (localPets) {
    allPets = localPets;
  } else {
    console.log("new pets please");
    const arthur = new Pet("arthur", "images/cats/arthurcat.jpg");
    const blue = new Pet("blue", "images/cats/Bluecat.jpg");
    const arbuckle = new Pet("arbuckle", "images/dogs/arbucklecat.jpg");
    const bruno = new Pet("bruno", "images/dogs/brunodog.jpg");
    const buckley = new Pet("buckley", "images/dogs/buckleydog.jpg");
    const jaxnjones = new Pet("jaxnjones", "images/Jax & Jonesbunnies.jpg");
    const scratchnsniff = new Pet("scratchnsniff", "images/scratchnsniffrats.jpg");
    const snail = new Pet("snail", "images/snailpic.jpg");
  }
}

checkLocalStorage();
renderPets();
// create the setLocalStorage function and invoke at the bottom of renderChart()
// create the checklocalStorage()
// comment out the new instances and place in the else part of if statement
// invoke the checkLocalStorage()
