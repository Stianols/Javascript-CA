const url = "https://openlibrary.org/developers/api";
const proxy = "https://noroffcors.herokuapp.com/";

const corsfix = proxy + url;

const resultsContainer = document.querySelector(".results");

async function makeApiCall() {
  try {
    const response = await fetch(corsfix);

    const results = await response.json();

    console.log(results);
  } catch (error) {
    console.log(error);
    resultsContainer.innerHTML = message("error", error);
  }
}

makeApiCall();
