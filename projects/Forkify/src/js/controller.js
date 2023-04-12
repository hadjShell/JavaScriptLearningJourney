import "core-js/stable";
import "regenerator-runtime/runtime";
import app from "./app";
import resultsView from "./view/resultsView";
import recipeView from "./view/recipeView.js";

///////////////////////////////////////

async function controlResults() {
    try {
        resultsView.renderSpinner();
        const results = await app.searchRecipe("pizza");
        resultsView.render(results);
    } catch (err) {
        throw err;
    }
}

function controlRecipe() {
    return new Promise(resolve => {
        console.log(app.currentRecipe);               // BUG: no ingredients and url for now
        recipeView.renderSpinner();
        recipeView.render(app.currentRecipe);
        resolve();
    });
}

(async function () {
    try {
        await controlResults();
        await controlRecipe();
    } catch (err) {
        alert(err);
    }
})();

//window.addEventListener("load", );          show recipe by id
// const id = window.location.hash.slice(1)