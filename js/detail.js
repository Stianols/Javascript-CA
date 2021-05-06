const detailContainer = document.querySelector(".game-details");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

console.log(id);

const url = "https://makeup-api.herokuapp.com/api/v1/products/";
const proxy = "https://noroffcors.herokuapp.com/";

const corsFix = proxy + url + id + ".json/";

console.log(corsFix);

async function fetchMakeup() {
  try {
    const response = await fetch(corsFix);
    const detail = await response.json();

    console.log(detail);

    createHtml(detail);
  } catch (error) {
    console.log(error);
    detailContainer.innerHTML = message("error", error);
  }
}

fetchMakeup();

function createHtml(detail) {
  detailContainer.innerHTML = `<h1>${detail.name}</h1>
                                <div class="details-description">${detail.price_sign}${detail.price}</div>
                                <br>
                                <div class="details-description">${detail.description}</div>`;
}
