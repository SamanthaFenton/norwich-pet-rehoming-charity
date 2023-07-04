"use Strict";
console.log("pet data");

const rehomingForm = document.getElementById("rehomingForm");
const parentElement = document.getElementById("petProfiles");
console.log("parentElement");

const article = document.createElement("article");

const allPets = [];

const pet = {
  type: "cat",
  name: "sofia",
  age: 7,
  interests: ["cuddling", "chasing string", "catnip"],
  children: true,
  otherAnimals: false,
  medical: true,
};

function Pet(type, name, age, interests, children, otherAnimals, medical, deadLine, imgFileName) {
  this.type = type;
  this.name = name;
  this.age = age;
  this.interests = interests;
  this.children = children;
  this.otherAnimals = otherAnimals;
  this.medical = medical;
  this.deadLine = deadLine;
  this.imageUrl = "images/" + imgFileName;
  this.pushPet = function () {
    allPets.push(this);
    console.log("allPets");
  };
  this.pushPet();
}

Pet.prototype.render = function () {
  const containerElement = document.getElementById("petProfiles");

  const article = document.createElement("article");
  containerElement.appendChild(article);

  const h4 = document.createElement("h4");
  h4.textContent = this.type;
  article.appendChild(h4);

  const h5 = document.createElement("h5");
  h5.textContent = this.name;
  article.appendChild(h5);

  const p = document.createElement("p");
  p.textContent = `${this.name} is adorable and is ${this.age} years old.`;
  article.appendChild(p);

  const ul = document.createElement("ul");
  article.appendChild(ul);
  for (let i = 0; i < this.interests.length; i++) {
    const li = document.createElement("li");
    li.textContent = this.interests[i];
    ul.appendChild(li);
  }

  const table = document.createElement("table");
  article.appendChild(table);

  const headerRow = document.createElement("tr");
  table.appendChild(headerRow);

  const childrenHeaderCell = document.createElement("th");
  childrenHeaderCell.textContent = "children";
  headerRow.appendChild(childrenHeaderCell);

  const otherAnHeaderCell = document.createElement("th");
  otherAnHeaderCell.textContent = "otherAnimals";
  headerRow.appendChild(otherAnHeaderCell);

  const medHeaderCell = document.createElement("th");
  medHeaderCell.textContent = "medical";
  headerRow.appendChild(medHeaderCell);

  const availHeaderCell = document.createElement("th");
  availHeaderCell.textContent = "deadLine";

  // add data row
  const dataRow = document.createElement("tr");
  table.appendChild(dataRow);

  // add data cell
  const childrenData = document.createElement("td");
  childrenData.textContent = this.children;
  dataRow.appendChild(childrenData);

  const otherAnData = document.createElement("td");
  otherAnData.textContent = this.otherAnimals;
  dataRow.appendChild(otherAnData);

  const medData = document.createElement("td");
  medData.textContent = this.medical;
  dataRow.appendChild(medData);

  const availData = document.createElement("td");
  availData.textContent = this.deadLine;
  dataRow.appendChild(availData);

  const image = document.createElement("img");
  image.setAttribute("src", this.imgFileName);
  image.setAttribute("alt", `${this.name} profile shot.`);
  article.appendChild(image);
};
const img = document.createElement("img");
img.setAttribute("src", "images/" + pet.name + ".jpg");
img.setAttribute("alt", pet.name + "so cute!");
article.appendChild(img);

const sofia = new Pet(
  "Cat",
  "Sofia",
  "4",
  ["cuddling", "chasing string", "catnip"],
  true,
  false,
  true,
  "https://unsplash.com/images/animals/cat"
);

console.log(sofia);

sofia.render();

addPetForm.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log(event);
  const type = event.target.type.value;
  const name = event.target.name.value;
  const age = event.target.age.value;
  let interests = event.target.interests.value;
  interests = interests.split(",");

  const children = event.target.children.checked;
  const otherAnimals = event.target.otherAnimals.checked;
  const medical = event.target.medical.checked;
  const deadLine = event.target.availData.value;
  const imageUrl = "images/pexels-alex-amak-16635443.jpg";

  const newPet = new Pet(type, name, age, interests, children, otherAnimals, medical, deadLine, imageUrl);
  console.log(newPet);
  console.log(allPets);

  render.allPets();
  addPetForm.reset();
});

function renderAllPets() {
  for (let i = 0; i < allPets.length; i++) {
    allPets[i].render();
  }

  render.allPets();
}
