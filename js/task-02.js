const input = document.querySelector("#font-size-control");
const span = document.querySelector("#text");

input.addEventListener("input", onChangeFontSize);

function onChangeFontSize(e) {
  span.style.fontSize = e.currentTarget.value + "px";
}
