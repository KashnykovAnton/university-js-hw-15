const input = document.querySelector("input");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const divContainer = document.querySelector("#boxes");

createBtn.addEventListener("click", onCreateBtnClick);
destroyBtn.addEventListener("click", onDestroyBtnClick);

function onCreateBtnClick() {
  createBoxes(input.value);
}

function onDestroyBtnClick() {
  divContainer.innerHTML = "";
  input.value = "";
}

function createBoxes(amount) {
  let markUp = "";
  for (let i = 1; i <= amount; i++) {
    let size = 10 * i + getStartBoxSize();
    markUp += `<div style="width: ${size}px; height: ${size}px; background-color: ${getRandomHexColor()}"></div>`;
  }
  divContainer.insertAdjacentHTML("beforeEnd", markUp);
}

function getStartBoxSize() {
  let lastBoxWidth = divContainer.lastChild?.style.width;
  return !!lastBoxWidth ? parseInt(lastBoxWidth) : 20;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
