const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

// Solution 1 - for any number of inputs
function onFormSubmit(e) {
  e.preventDefault();
  const elements = [...form.elements].filter((el) => el.nodeName === "INPUT");
  const result = elements.reduce((acc, { name, value }) => {
    if (!value.trim()) {
      alert("Please fill in all the fields!");
      return acc;
    }
    acc[name] = value;
    return acc;
  }, {});
  if (Object.keys(result).length === elements.length) {
    console.log(result);
    form.reset();
  }
}

// Solution 2 - for two inputs - email and password
// function onFormSubmit(e) {
//   e.preventDefault();
//   const elements = e.currentTarget.elements;
//   const email = elements.email.value;
//   const password = elements.password.value;

//   if (email === "" || password === "") {
//     return alert("Please fill in all the fields!");
//   }

//   console.log({ email, password });
//   form.reset();
// }
