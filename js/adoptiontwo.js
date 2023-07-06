"use strict";
console.log("adoption");

const pet = {
  type: "cat",
  breed: "dsh",
  name: "sofia",
  age: 7,
  interests: ["cuddling", "chasing string", "catnip"],
  children: true,
  otherAnimals: false,
  medical: false,
};
const article = document.createElement("article");
const h3 = document.createElement("h3");
h3.textContent = pet.name;
article.appendChild("h3");

const h4 = document.createElement("h4");
h4.textContent = pet.type;
article.appendChild("h4");

const h5 = document.createElement("h5");
h5.textContent = pet.breed;
article.appendChild("h5");

const p = document.createElement("p");
p.textContent = pet.name + " is adorable and is " + pet.age + " old";
article.appendChild("p");

const ul = document.createElement("ul");
article.appendChild(ul);
for (let i = 0; i < this.interests.length; i++) {
  const li = document.createElement("li");
  li.textContent = this.interests[i];
  ul.appendChild("li");
}

const img = document.createElement("img");
img.setAttribute("src", "images/", +pet.name + "ready for rehoming");
article.appendChild("img");

console.log("pet");
console.log(pet.type);
console.log(pet.breed);
console.log(pet.name);
console.log(pet.age);

/*const pet = {
  type: "cat",
  name: "sofia",
  age: 7,
  interests: ["cuddling", "chasing string", "catnip"],
  children: true,
  otherAnimals: false,
  medical: true,
};*/
