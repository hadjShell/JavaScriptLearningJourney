import View from "./view";
import icons from "url:../../img/icons.svg";

class Pagination extends View {
    _parentElement = document.querySelector(".pagination");

    render(hasPrevious, hasNext, pageNum) {
        this._clear();
        if (hasPrevious) {
            const html =
                `<button class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-left"></use>
            </svg>
            <span>Page ${pageNum - 1}</span>
            </button>`;
            this._parentElement.insertAdjacentHTML("afterbegin", html);
        }
        if (hasNext) {
            const html =
                `<button class="btn--inline pagination__btn--next">
                <span>Page ${pageNum + 1}</span>
                <svg class="search__icon">
                  <use href="${icons}#icon-arrow-right"></use>
                </svg>
                </button>`;
            this._parentElement.insertAdjacentHTML("afterbegin", html);
        }
    }

    addHandler(handler) {
        // Event delegation
        this._parentElement.addEventListener("click", e => {
            const clicked = e.target.closest(".btn--inline");
            if (!clicked) return;

            const direction = clicked.classList.item(1).slice(-4);
            handler(direction);
        });
    }

}

export default new Pagination();