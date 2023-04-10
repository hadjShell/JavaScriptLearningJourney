'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');
const imgsContainer = document.querySelector('.images');

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

// const neighbor = createCountryElement("china");

function createElementImg(src) {
    return new Promise(function (resolve, reject) {
        const elementImg = document.createElement("img");
        elementImg.src = src;
        elementImg.classList.add("parallel");
        elementImg.addEventListener("load", () => {
            imgsContainer.append(elementImg);
            resolve(elementImg);
        });
        elementImg.addEventListener("error", () => reject(new Error("Image not found")));
    })
}

function wait(seconds) {
    return new Promise(function (resolve) {
        setTimeout(resolve, seconds * 1000);
    })
}

// let e;

// createElementImg("img/img-1.jpg")
//     .then(element => {
//         e = element;
//         return wait(2);
//     })
//     .then(() => {
//         console.log("1");
//         e.style.display = "none";
//         return createElementImg("img/img-2.jpg");
//     })
//     .then(element => {
//         e = element;
//         return wait(2);
//     })
//     .then(() => {
//         console.log("2");
//         e.style.display = "none";
//         return createElementImg("img/img-3.jpg");
//     })
//     .then(element => {
//         e = element;
//         return wait(2);
//     })
//     .then(() => {
//         console.log("3");
//         e.style.display = "none";
//     })
//     .catch(err => console.error(err));

async function loadNPause() {
    try {
        for (let i = 1; i < 4; i++) {
            const img = await createElementImg(`img/img-${i}.jpg`);
            await wait(2);
            img.style.display = "none";
        }
    } catch (err) {
        console.error(err);
    }
}

// loadNPause();

async function loadAll(imgArr) {
    let imgs = imgArr.map(async url => await createElementImg(url));
    imgs = await Promise.all(imgs);
    console.log(imgs);
}

loadAll(['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']);