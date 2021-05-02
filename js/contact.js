const form = document.querySelector("#contactForm");
const firstName = document.querySelector("#firstName");
const firstNameError = document.querySelector("#firstNameError");
const subjectName = document.querySelector("#subjectName");
const subjectError = document.querySelector("#subjectError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const adresstName = document.querySelector("#adressName");
const adressError = document.querySelector("#adressError");

function validateForm(event) {
  event.preventDefault();

  if (checkLength(firstName.value, 0) === true) {
    firstNameError.style.display = "none";
  } else {
    firstNameError.style.display = "block";
  }

  if (checkLength(subjectName.value, 9) === true) {
    subjectError.style.display = "none";
  } else {
    subjectError.style.display = "block";
  }

  if (validateEmail(email.value) === true) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
  }

  if (checkLength(adressName.value, 24) === true) {
    adressError.style.display = "none";
  } else {
    adressError.style.display = "block";
  }

  console.log("hello");
}

form.addEventListener("submit", validateForm);

function checkLength(value, len) {
  if (value.trim().length > len) {
    return true;
  } else {
    return false;
  }
}

function validateEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatches = regEx.test(email);
  return patternMatches;
}
