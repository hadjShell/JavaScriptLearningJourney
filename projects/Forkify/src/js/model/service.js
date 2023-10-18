import Recipe from "./recipe";
import { AJAX } from "../helper";
import {
  KEY_FORKIFY,
  PATH_FORKIFY,
  MAX_RECIPES_ON_SEARCH_PAGE,
} from "../config";

class Service {
  #bookmarks = new Set([]); // set of recipe objects bookmarked by user
  #recipes = []; // array of undetailed recipe objects created on api data
  #currentRecipe = null; // detailed recipe object currently selected by user
  #currentSearchPage = 0; // number represents current page in the result components
  #hasPrevious = false; // has previous page?
  #hasNext = false; // has next page?

  constructor() {}

  get bookmarks() {
    return this.#bookmarks;
  }
  get currentRecipe() {
    const {
      id,
      title,
      servings,
      imageUrl,
      url,
      ingredients,
      publisher,
      cookingTime,
      isGeneratedByUser,
      isBookmarked,
    } = this.#currentRecipe;
    return {
      id,
      title,
      servings,
      imageUrl,
      url,
      ingredients,
      publisher,
      cookingTime,
      isGeneratedByUser,
      isBookmarked,
    };
  }
  get hasPrevious() {
    return this.#hasPrevious;
  }
  get hasNext() {
    return this.#hasNext;
  }
  get currentSearchPage() {
    return this.#currentSearchPage;
  }

  set bookmarks(bms) {
    return (this.#bookmarks = new Set(bms));
  }

  async setCurrentRecipe(id) {
    this.#currentRecipe = await this._findRecipeById(id);
    this.#bookmarks.forEach(bm => {
      if (bm.id === id) {
        this.#currentRecipe.isBookmarked = true;
      }
    });
  }

  async searchRecipe(str = "") {
    try {
      // Reset the recipes array first whenever a search occurs
      this.#recipes = [];
      const url = `${PATH_FORKIFY}?search=${str}&key=${KEY_FORKIFY}`;
      // Fetch data
      const data = await AJAX(url);
      const dataRecipes = data.recipes;

      // Initialise app's states
      await this._mapDataToRecipes(dataRecipes);
      this.#currentSearchPage = 1;
      this._hasPreviousOrNext();
    } catch (err) {
      throw err;
    }
  }

  // Generate output data from the recipe objects on current page
  recipesOnPage(pageNum) {
    return new Promise(resolve => {
      resolve(
        this.#recipes
          .filter(
            (_, i) =>
              i < pageNum * MAX_RECIPES_ON_SEARCH_PAGE &&
              i >= (pageNum - 1) * MAX_RECIPES_ON_SEARCH_PAGE
          )
          .map(recipe => {
            const { id, imageUrl, title, publisher } = recipe;
            return { id, imageUrl, title, publisher };
          })
      );
    });
  }

  pagination(direction) {
    direction === "prev"
      ? this.#currentSearchPage--
      : this.#currentSearchPage++;
    this._hasPreviousOrNext();
  }

  updateServings(goUp) {
    // check servings
    if (!goUp && this.#currentRecipe.servings === 1) return false;

    this.#currentRecipe.ingredients.forEach(ingredient => {
      if (isFinite(ingredient.quantity))
        ingredient.quantity *= goUp
          ? (this.#currentRecipe.servings + 1) / this.#currentRecipe.servings
          : (this.#currentRecipe.servings - 1) / this.#currentRecipe.servings;
    });
    goUp ? this.#currentRecipe.servings++ : this.#currentRecipe.servings--;
    return true;
  }

  toggleBookmark(id) {
    // Check if already has this bookmark
    let hasThisBookmark = false;
    let bookmark = null;
    this.#bookmarks.forEach(bm => {
      if (bm.id === id) {
        hasThisBookmark = true;
        bookmark = bm;
      }
    });
    // Toggle bookmark in the array and local storage
    if (hasThisBookmark) {
      this.#bookmarks.delete(bookmark);
    } else {
      this.#bookmarks.add(this.currentRecipe);
    }
    localStorage.setItem(
      "bookmarks",
      JSON.stringify(Array.from(this.#bookmarks))
    );
  }

  // Helpers
  // Get detailed recipe by id
  async _findRecipeById(id) {
    const url = `${PATH_FORKIFY}/${id}?key=${KEY_FORKIFY}`;
    const data = await AJAX(url);
    return new Recipe(data.recipe);
  }

  _mapDataToRecipes(dataRecipes) {
    return new Promise(resolve => {
      dataRecipes.forEach(
        dataRecipe => this.#recipes.push(new Recipe(dataRecipe)) // missed fields == undefined
      );
      resolve();
    });
  }

  _hasPreviousOrNext() {
    this.#hasPrevious = this.#currentSearchPage > 1;
    this.#hasNext =
      this.#currentSearchPage * MAX_RECIPES_ON_SEARCH_PAGE <
      this.#recipes.length;
  }
}

const service = new Service();
export default service;
