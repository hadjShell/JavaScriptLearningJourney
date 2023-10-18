import "core-js/stable";
import "regenerator-runtime/runtime";
import service from "./model/service";
import resultsView from "./view/resultsView";
import recipeView from "./view/recipeView.js";
import searchView from "./view/searchView";
import paginationView from "./view/paginationView";
import bookmarksView from "./view/bookmarksView";

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
    paginationView.render(
      service.hasPrevious,
      service.hasNext,
      service.currentSearchPage
    );
  } catch (err) {
    console.error(err);
    //resultsView.renderError();
  }
}

async function controlResults(key, pageNum) {
  try {
    resultsView.renderSpinner();
    await service.searchRecipe(key);
    const results = await service.recipesOnPage(pageNum);
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
    await service.setCurrentRecipe(id);
    recipeView.render(service.currentRecipe);
  } catch (err) {
    console.error(err);
    //recipeView.renderError();
  }
}

// @direction: can only be "prev" or "next"
async function controlPage(direction) {
  try {
    // 1. Pass change to the app
    service.pagination(direction);

    // 2. Render new results and new pagination
    const results = await service.recipesOnPage(service.currentSearchPage);
    resultsView.render(results);
    paginationView.render(
      service.hasPrevious,
      service.hasNext,
      service.currentSearchPage
    );
  } catch (err) {
    console.error(err);
    //return;
  }
}

function controlServings(goUp) {
  // 1. Get goup or godown

  // 2. Calculate new ingredient.quantity
  if (service.updateServings(goUp))
    // 3. Render recipe
    recipeView.update(service.currentRecipe);
}

function controlBookmark(id) {
  // 1. Get recipe id

  // 2. Pass it back to the server and store it
  service.toggleBookmark(id);
  const bookmarks = service.bookmarks;

  // 3. Update bookmark view and button view
  bookmarksView.render(bookmarks);
  recipeView.toggleButton();
}

function controlLocalBookmarks() {
  // Get local storage data and render bookmarks
  const bookmarks = JSON.parse(localStorage.getItem("bookmarks"));
  service.bookmarks = bookmarks;
  bookmarksView.render(bookmarks);
}

function init() {
  bookmarksView.addHandler(controlLocalBookmarks);
  recipeView.addHandler(controlRecipe);
  recipeView.addServingsHandler(controlServings);
  recipeView.addBookmarksHandler(controlBookmark);
  searchView.addHandler(controlSearch);
  paginationView.addHandler(controlPage);
}

init();
