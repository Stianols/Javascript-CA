const url = "https://makeup-api.herokuapp.com/api/v1/products.json";
const proxy = "https://noroffcors.herokuapp.com/";

const corsFix = proxy + url;

const resultsContainer = document.querySelector(".results");

console.log(corsFix);

async function makeApiCall() {
  try {
    const response = await fetch(corsFix);

    const results = await response.json();

    console.log(results);

    for (let i = 0; i < results.length; i++) {
      if (results[i].id < 1046) {
        break;
      }

      resultsContainer.innerHTML += `<a href="details.html?id=${results[i].id}" class="card">
                                            <h4>Name: ${results[i].name}</h4>
                                            <h4>Brand: ${results[i].brand}</h4>
                                            <h4>Price: ${results[i].price_sign}${results[i].price}</h4>
                                        </a>`;
    }
  } catch (error) {
    console.log(error);
    resultsContainer.innerHTML = message("error", error);
  }
}

makeApiCall();
