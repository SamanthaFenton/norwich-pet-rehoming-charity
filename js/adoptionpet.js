"use Strict";
console.log("pet data");

const parentElement = document.getElementById("petProfiles");
console.log("parentElement");

const article = document.createElement("article");

const allPets = [];

function Pet(type, name, age, interests, children, otherAnimals, medical, deadLine, imgFileName) {
  this.type = type;
  this.name = name;
  this.age = age;
  this.interests = interests;
  this.children = children;
  this.otherAnimals = otherAnimals;
  this.medical = medical;
  this.deadLine = deadLine;
  this.imageUrl = "images/cats/" + imgFileName;
  this.render();
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

  for (let i = 0; i < this.interests.length; i++) {
    const li = document.createElement("li");
    li.textContent = this.interests[i];
    ul.appendChild(li);
  }
  article.appendChild(ul);

  const table = document.createElement("table");
  article.appendChild(table);

  const headerRow = document.createElement("tr");
  table.appendChild(headerRow);

  const childrenHeaderCell = document.createElement("th");
  childrenHeaderCell.textContent = "Can live with children";
  headerRow.appendChild(childrenHeaderCell);

  const otherAnHeaderCell = document.createElement("th");
  otherAnHeaderCell.textContent = "Can live with other animals";
  headerRow.appendChild(otherAnHeaderCell);

  const medHeaderCell = document.createElement("th");
  medHeaderCell.textContent = "Has medical condition";
  headerRow.appendChild(medHeaderCell);

  const dateHeaderCell = document.createElement("th");
  dateHeaderCell.textContent = "Date available";
  headerRow.appendChild(dateHeaderCell);

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
  image.setAttribute("src", "images/" + this.name + ".jpg");
  image.setAttribute("alt", `${this.name} profile shot.`);
  article.appendChild(image);
};

/*addPetForm.addEventListener("click", function (event) {
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
  const imageUrl = event.target.imageUrl.value;

  const newPet = new Pet(type, name, age, interests, children, otherAnimals, medical, deadLine, imageUrl);
  console.log(newPet);
  console.log(allPets);

  render.allPets();
  addPetForm.reset();
});*/

const sofia = new Pet("Cat", "Sofia", "4", ["cuddling", "chasing string", "catnip"], true, false, true, "07.07.2023");
const shiznay = new Pet("Cat", "Shiznay", 2, ["eating", "sleeping", "nosey"], true, true, false, "30.03.2023");
const arbuckle = new Pet(
  "Cat",
  "Arbuckle",
  8,
  ["fighting", "playing", "ninjaskills"],
  false,
  false,
  false,
  "30.03.2023"
);
const arthur = new Pet("Cat", "Arthur", 2, ["frisby", "sunbathing", "socialing"], true, true, false, "30.03.2023");
const blue = new Pet("Cat", "Blue", 12, ["fighting", "sleeping", "sunbathing"], false, false, false, "30.03.2023");
const bruno = new Pet("Dog", "Bruno", 2, ["sleeping", "sunbathing", "socialing"], true, true, false, "30.03.2023");
const buckley = new Pet("Dog", "Buckley", 1, ["ballgames", "herding", "walks"], false, false, false, "30.03.2023");
const dribbles = new Pet(
  "Dog",
  "Dribbles",
  2,
  ["cuddles", "footlover", "backscratches"],
  true,
  true,
  false,
  "30.03.2023"
);
const dwayne = new Pet("Dog", "Dwayne", 2, ["licking", "playing", "tummyrubs"], false, false, false, "30.03.2023");
const jaxnjones = new Pet(
  "Rabbits",
  "JaxnJones",
  1,
  ["hopping", "nibbling", "playing"],
  true,
  true,
  false,
  "30.03.2023"
);
const sheeba = new Pet("Cat", "Sheeba", 5, ["running", "cuddles", "playing"], false, false, false, "30.03.2023");
const snail = new Pet("Snail", "Geoff", 4, ["sliming", "lettuce", "baths"], false, false, false, "30.03.2023");
const loobie = new Pet("Cat", "Loobie", 7, ["licking", "scratching", "eating"], false, false, false, "30.03.2023");
const scratchnsniff = new Pet(
  "Rats",
  "ScratchnSniff",
  1,
  ["nibbling", "licking", "climbing"],
  false,
  false,
  false,
  "30.03.2023"
);

console.log(sofia);
console.log(shiznay);
console.log(arbuckle);
console.log(arthur);
console.log(blue);
console.log(scratchnsniff);
console.log(loobie);
console.log(snail);
console.log(sheeba);
console.log(jaxnjones);
console.log(dwayne);
console.log(dribbles);

function renderAllPets() {
  for (let i = 0; i < allPets.length; i++) {
    allPets[i].render();
  }

  render.allPets();
}
