import View from "./view";
import icons from "url:../../img/icons.svg";

class ResultsView extends View {
    _parentElement = document.querySelector('.results');
    _errorMessage = "No recipes found for your query!\nPlease try again :)"

    render(results) {
        this._clear();
        results.forEach(result => {
            this._parentElement.append(this._createElementReult(result));
        });
    }

    _createElementReult(result) {
        const item = document.createElement("li");
        item.classList.add("preview");
        item.innerHTML =
            `<a class="preview__link preview__link--active" href="#${result.id}">
              <figure class="preview__fig">
              <img src="${result.imageUrl}" alt="Test" />
              </figure>
              <div class="preview__data">
              <h4 class="preview__title">${result.title}</h4>
              <p class="preview__publisher">${result.publisher}</p>
              <div class="preview__user-generated">
                  <svg>
                  <use href="${icons}#icon-user"></use>
                  </svg>
              </div>
              </div>
            </a>`;
        return item;
    }
}

export default new ResultsView();