import fracty from "fracty";
import View from "./view";
import icons from "url:../../img/icons.svg";

class RecipeView extends View {
  _parentElement = document.querySelector(".recipe");
  _errorMessage = "We couldn't find that recipe. \nPlease try another one :)";

  render(recipe) {
    this._clear();
    this._parentElement.insertAdjacentHTML(
      "afterbegin",
      this._generateHTML(recipe)
    );
  }

  update(recipe) {
    super.update(this._generateHTML(recipe));
  }

  toggleButton() {
    const button = this._parentElement.querySelector(".btn--round use");
    if (button.href.baseVal.slice(-4) === "fill")
      button.setAttribute("href", `${icons}#icon-bookmark`);
    else button.setAttribute("href", `${icons}#icon-bookmark-fill`);
  }

  addHandler(handler) {
    ["hashchange", "load"].forEach(e => window.addEventListener(e, handler));
  }

  addServingsHandler(handler) {
    this._parentElement.addEventListener("click", e => {
      const clicked = e.target.closest(".btn--increase-servings");
      if (!clicked) return;

      const goUp = clicked.dataset.goup === "true";
      handler(goUp);
    });
  }

  addBookmarksHandler(handler) {
    this._parentElement.addEventListener("click", e => {
      const clicked = e.target.closest(".btn--round");
      if (!clicked) return;

      const id =
        this._parentElement.querySelector(".recipe__details").dataset.id;
      handler(id);
    });
  }

  renderError() {
    super.renderError(this._errorMessage);
  }

  _generateHTML(recipe) {
    return `<figure class="recipe__fig">
      <img src="${recipe.imageUrl}" alt="${recipe.title}" class="recipe__img" />
      <h1 class="recipe__title">
        <span>${recipe.title}</span>
      </h1>
      </figure>

      <div class="recipe__details" data-id="${recipe.id}">
      <div class="recipe__info">
        <svg class="recipe__info-icon">
          <use href="${icons}#icon-clock"></use>
        </svg>
        <span class="recipe__info-data recipe__info-data--minutes">${
          recipe.cookingTime
        }</span>
        <span class="recipe__info-text">minutes</span>
      </div>
      <div class="recipe__info">
        <svg class="recipe__info-icon">
          <use href="${icons}#icon-users"></use>
        </svg>
        <span class="recipe__info-data recipe__info-data--people">${
          recipe.servings
        }</span>
        <span class="recipe__info-text">servings</span>

        <div class="recipe__info-buttons">
          <button class="btn--tiny btn--increase-servings" data-goup="false">
            <svg>
              <use href="${icons}#icon-minus-circle"></use>
            </svg>
          </button>
          <button class="btn--tiny btn--increase-servings" data-goup="true">
            <svg>
              <use href="${icons}#icon-plus-circle"></use>
            </svg>
          </button>
        </div>
      </div>

      <div class="recipe__user-generated">

      </div>
      <button class="btn--round">
        <svg class="">
          <use href="${icons}#icon-bookmark${
      recipe.isBookmarked ? "-fill" : ""
    }"></use>
        </svg>
      </button>
      </div>

      <div class="recipe__ingredients">
      <h2 class="heading--2">Recipe ingredients</h2>
      ${this._createHTMLIngredients(recipe)}
      </div>

      <div class="recipe__directions">
      <h2 class="heading--2">How to cook it</h2>
      <p class="recipe__directions-text">
        This recipe was carefully designed and tested by
        <span class="recipe__publisher">${
          recipe.publisher
        }</span>. Please check out
        directions at their website.
      </p>
      <a
        class="btn--small recipe__btn"
        href="${recipe.url}"
        target="_blank"
      >
        <span>Directions</span>
        <svg class="search__icon">
          <use href="${icons}#icon-arrow-right"></use>
        </svg>
      </a>
      </div>`;
  }

  _createHTMLIngredient(ingredient) {
    return `<li class="recipe__ingredient">
      <svg class="recipe__icon">
        <use href="${icons}#icon-check"></use>
      </svg>
      <div class="recipe__quantity">${
        ingredient.quantity ? fracty(ingredient.quantity) : ""
      }</div>
      <div class="recipe__description">
        <span class="recipe__unit">${ingredient.unit}</span>
        ${ingredient.description}
      </div>
      </li>`;
  }

  _createHTMLIngredients(recipe) {
    let html = `<ul class="recipe__ingredient-list">`;
    recipe.ingredients.forEach(ingredient => {
      html += this._createHTMLIngredient(ingredient);
    });
    html += `</ul>`;
    return html;
  }
}

export default new RecipeView();
