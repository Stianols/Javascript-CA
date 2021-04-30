const detailContainer = document.querySelector(".game-details");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

console.log(id);


const url = "https://makeup-api.herokuapp.com/api/v1/products.json/";
const proxy = "https://noroffcors.herokuapp.com/";

const corsFix = proxy + url;

const finalUrl = corsFix + id;

console.log(finalUrl);

async function fetchMakeup() {

    try {
        const response = await fetch(finalUrl);
        const detail = await response.json();

        console.log(detail);

        createHtml(detail);
      
    }
    catch(error) {
        console.log(error);
        detailContainer.innerHTML = message("error", error);
    }
    
}

fetchMakeup();

function createHtml(results) {
    detailContainer.innerHTML = `<h1>${detail.name}</h1>
                                <div class="details-description">${detail.brand}</div>
                                <time class="details-date">Released: ${detail.id}</time>`;
}