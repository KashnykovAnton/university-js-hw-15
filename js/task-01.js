const input = document.querySelector("#validation-input");

input.addEventListener("blur", onInputValidation);

function onInputValidation(e) {
  input.className = e.currentTarget.value.length === Number(input.dataset.length) ? "valid" : "invalid";
}
