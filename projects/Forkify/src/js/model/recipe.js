export default class Recipe {
    #id = null;
    #title = "";
    #url = "";
    #imageUrl = "";
    #publisher = "";
    #cookingTime = 0;
    #servings = 1;
    #ingredients = [];      // {quantity, unit, description}
    #isGeneratedByUser = false;
    #isBookmarked = false;

    constructor(recipe) {
        this.#id = recipe.id;
        this.#title = recipe.title;
        this.#url = recipe.source_url;
        this.#imageUrl = recipe.image_url;
        this.#publisher = recipe.publisher;
        this.#cookingTime = recipe.cooking_time;
        this.#servings = recipe.servings;
        this.#ingredients = recipe.ingredients;
    }

    // Getters
    get id() { return this.#id; }
    get title() { return this.#title; }
    get url() { return this.#url; }
    get imageUrl() { return this.#imageUrl; }
    get publisher() { return this.#publisher; }
    get cookingTime() { return this.#cookingTime; }
    get servings() { return this.#servings; }
    get ingredients() { return this.#ingredients; }
    get isGeneratedByUser() { return this.#isGeneratedByUser; }
    get isBookmarked() { return this.#isBookmarked; }

    set servings(ser) { return this.#servings = ser; }
    set isBookmarked(isBm) { return this.#isBookmarked = isBm; }
}
