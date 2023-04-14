import "core-js/stable";
import "regenerator-runtime/runtime";
import app from "./app";
import resultsView from "./view/resultsView";
import recipeView from "./view/recipeView.js";
import searchView from "./view/searchView";
import paginationView from "./view/paginationView";

if (module.hot) {
    module.hot.accept();
}

///////////////////////////////////////

async function controlSearch() {
    try {
        // 1. Get query
        const key = searchView.getQuery();
        if (!key) return;

        // 2. Load and render results
        await controlResults(key, 1);

        // 3. Render pagination
        paginationView.render(app.hasPrevious, app.hasNext, app.currentSearchPage);
    } catch (err) {
        console.error(err);
        //resultsView.renderError();
    }
}

async function controlResults(key, pageNum) {
    try {
        resultsView.renderSpinner();
        await app.searchRecipe(key);
        const results = await app.recipesOnPage(pageNum);
        resultsView.render(results);
    } catch (err) {
        throw err;
    }
}

async function controlRecipe() {
    try {
        // 1. Get recipe id
        const id = window.location.hash.slice(1);
        if (!id) return;

        // 2. Render spinner
        recipeView.renderSpinner();

        // 3. Load recipe data and render it
        await app.setCurrentRecipe(id);
        recipeView.render(app.currentRecipe);
    } catch (err) {
        console.error(err);
        //recipeView.renderError();
    }
}

// @direction: can only be "prev" or "next"
async function controlPage(direction) {
    try {
        // 1. Pass change to the app
        app.pagination(direction);

        // 2. Render new results and new pagination
        const results = await app.recipesOnPage(app.currentSearchPage);
        resultsView.render(results);
        paginationView.render(app.hasPrevious, app.hasNext, app.currentSearchPage);
    } catch (err) {
        console.error(err);
        //return;
    }
}

function controlServings(goUp) {
    // 1. Get goup or godown

    // 2. Calculate new ingredient.quantity
    if (app.updateServings(goUp))
        // 3. Render recipe
        recipeView.update(app.currentRecipe);
}

function init() {
    recipeView.addHandler(controlRecipe);
    recipeView.addServingsHandler(controlServings);
    searchView.addHandler(controlSearch);
    paginationView.addHandler(controlPage);
}

init();