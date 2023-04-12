import Recipe from "./model/recipe";
import { timeout } from "./helper";
import { KEY_FORKIFY, PATH_FORKIFY, MAX_RECIPES_ON_SEARCH_PAGE, TIMEOUT_SEC } from "./config"

class App {
    #bookmarks = new Set([]);           // set of recipe objects bookmarked by user
    #recipes = [];                      // array of recipe objects created on api data
    #currentRecipe = null;              // recipe object currently selected by user
    #currentSearchPage = null;          // number represents current page in the result components

    constructor() { }

    get bookmarks() { return this.#bookmarks; }
    get currentRecipe() {
        const { id, title, servings, imageUrl, url, ingredients, publisher, cookingTime } = this.#currentRecipe;
        return { id, title, servings, imageUrl, url, ingredients, publisher, cookingTime };
    }

    async searchRecipe(str = "") {
        try {
            const url = `${PATH_FORKIFY}?search=${str}&key=${KEY_FORKIFY}`;
            // Fetch data from api,
            // if request time is too long, throw error
            const response = await Promise.race([fetch(url), timeout(TIMEOUT_SEC)]);
            const data = await response.json();
            if (!response.ok) throw new Error(`${data.message} (${response.status})`);
            const dataRecipes = data.data.recipes;
            const dataIds = await this._getAllRecipesIds(dataRecipes);

            // Initialise app's states
            // Fetch detailed data based on recipe ids,
            // if request time is too long, throw error
            await Promise.race([this._mapDataToRecipe(dataIds), timeout(TIMEOUT_SEC)]);
            console.log(this.#recipes);
            // OK
            this.#currentSearchPage = 1;

            this.#currentRecipe = this.#recipes[0];     // TODO: fake logic, delete later

            const recipesOnCurrentPage = await this.recipesOnPage(this.#currentSearchPage);
            return recipesOnCurrentPage;
        } catch (err) {
            throw err;
        }
    }

    recipesOnPage(pageNum) {
        return new Promise(resolve => {
            resolve(this.#recipes.filter((_, i) =>
                (i < pageNum * MAX_RECIPES_ON_SEARCH_PAGE && i >= (pageNum - 1) * MAX_RECIPES_ON_SEARCH_PAGE))
                .map(recipe => {
                    const { id, imageUrl, title, publisher } = recipe;
                    return { id, imageUrl, title, publisher };
                }))
        });
    }

    async pageUp() { }   // Validation

    async pageDown() { }

    addRecipe(recipeInfo) {
        // Validation

        // Create recipe
        const newRecipe = new Recipe(recipeInfo);
        newRecipe.isGeneratedByUser = true;

        // Add to recioes array
    }

    changeServings(id, option) {
        const recipe = this._findRecipeById(id);
        return option === "increase" ? recipe.increaseQuantity() : recipe.decreaseQuantity();
    }

    // Methods related to bookmark
    bookmarkRecipe(id) {
        return this.#bookmarks.add(this._findRecipeById(id));
    }
    unbookmarkRecipe(id) {
        return this.#bookmarks.delete(this._findRecipeById(id));
    }
    getABookmarkRecipe(id) {
        return this._findRecipeById(id);
    }

    // Helpers
    _findRecipeById(id) {
        return this.#recipes.find(recipe => recipe.id === id);
    }

    // Get all searched recipes id in an array
    _getAllRecipesIds(dataRecipes) {
        return new Promise(resolve => {
            resolve(dataRecipes.map(recipe => recipe.id));
        });
    }

    // Map object data fetched from api to real Recipe objetcs
    _mapDataToRecipe(dataIds) {
        return Promise.resolve(dataIds.forEach(id => {
            // Fetch data from api
            fetch(`${PATH_FORKIFY}/${id}?key=${KEY_FORKIFY}`)
                .then(response => {
                    const data = response.json();
                    if (!response.ok) throw new Error(`${data.message} (${response.status})`);
                    return data;
                })
                .then(data => {
                    this.#recipes.push(new Recipe(data.data.recipe));
                })
                .catch(err => { throw err; });
        }));
    }
}

const app = new App();
export default app;