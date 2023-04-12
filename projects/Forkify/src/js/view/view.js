import icons from "url:../../img/icons.svg";

export default class View {
    _parentElement = null;
    _errorMessage = "";

    renderSpinner() {
        const html =
            `<div class="spinner">
          <svg>
            <use href="${icons}#icon-loader"></use>
          </svg>
          </div>`;
        this._clear();
        this._parentElement.insertAdjacentHTML("afterbegin", html);
    }

    _clear() {
        this._parentElement.innerHTML = "";
    }
}