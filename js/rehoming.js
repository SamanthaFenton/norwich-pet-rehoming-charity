"use strict";
console.log("petdata");

petForm.addEventListener("submit", handlePetSubmit);

const petButton = document.getElementById("pet Button");

const petForm = document.getElementById("rehomingForm");

function Pet(name) {
  this.name = name;
  this.render = function () {
    const listItem = document.createElement("li");
    listItem.textContent = this.name;
    article.appendchild(listItem);
  };
}

function handlePetSubmit() {
  event.preventDefault();
  const newPet = newPet(event.target.Pet.value);
  allPets.push(newPet);
  petForm.reset();
  newPet.render();
}

addPetForm.addEventListener("click", function (event) {
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
});

function setLocalStorage() {
  localStorage.setItem("pets", JSON.stringify(allPets));
}

function checkLocalStorage() {
  const localPets = JSON.parse(localStorage.getItem("pets"));
}
