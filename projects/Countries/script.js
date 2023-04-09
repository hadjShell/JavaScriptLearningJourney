'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
function createCountryElement(name) {
    const request = new XMLHttpRequest();
    request.open("GET", `https://restcountries.com/v2/name/${name}`);
    request.send();
    request.addEventListener("load", function () {
        const [data] = JSON.parse(this.responseText);
        renderCountry(data);
        const neighbor = data.borders ? data.borders[0] : "";
        if (neighbor !== "") {
            const request2 = new XMLHttpRequest();
            request2.open("GET", `https://restcountries.com/v2/alpha/${neighbor}`);
            request2.send();
            request2.addEventListener("load", function () {
                const data = JSON.parse(this.responseText);
                renderCountry(data);
            });
        }
    });
}

function renderCountry(data) {
    const elementCard = document.createElement("article");
    elementCard.classList.add("country");
    elementCard.innerHTML = `<img class="country__img" src=${data.flag} />
    <div class="country__data">
      <h3 class="country__name">${data.name}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${data.population}</p>
      <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
      <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
    </div>`;
    countriesContainer.append(elementCard);
}

const neighbor = createCountryElement("china");


