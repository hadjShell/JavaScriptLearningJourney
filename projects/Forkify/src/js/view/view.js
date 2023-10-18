import icons from "url:../../img/icons.svg";

export default class View {
  _parentElement = null;
  _errorMessage = "";

  /**
   * Render the received data to the DOM
   * @param {Object | Object[]} data The data to be rendered (e.g. recipe)
   * @returns {undefined}
   * @this {Object} View instance
   * @author Jiayuan Zhang
   */
  render(data) {}

  update(markup) {
    const newDOM = document.createRange().createContextualFragment(markup);
    const newElements = Array.from(newDOM.querySelectorAll("*"));
    const curElements = Array.from(this._parentElement.querySelectorAll("*"));

    newElements.forEach((newEle, i) => {
      const curEle = curElements[i];
      // NOTE: whitespace in html is also a text node!!!!!!!!!!!!!!
      if (
        !newEle.isEqualNode(curEle) &&
        newEle.firstChild &&
        newEle.firstChild.nodeType === Node.TEXT_NODE &&
        newEle.firstChild.nodeValue.trim() !== ""
      )
        curEle.textContent = newEle.textContent;
      if (!newEle.isEqualNode(curEle)) {
        Array.from(newEle.attributes).forEach(attr =>
          curEle.setAttribute(attr.name, attr.value)
        );
      }
    });
  }

  addHandler(handler) {}

  renderSpinner() {
    const html = `<div class="spinner">
          <svg>
            <use href="${icons}#icon-loader"></use>
          </svg>
          </div>`;
    this._clear();
    this._parentElement.insertAdjacentHTML("afterbegin", html);
  }

  renderError(message) {
    const html = `<div class="error">
            <div>
                <svg>
                <use href="${icons}#icon-alert-triangle"></use>
                </svg>
            </div>
      <p>${message}</p>`;
    this._clear();
    this._parentElement.insertAdjacentHTML("afterbegin", html);
  }

  _generateHTML(data) {}

  _clear() {
    this._parentElement.innerHTML = "";
  }
}
