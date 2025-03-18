import View from "./view";
import icons from "url:../../img/icons.svg";

class BookmarksView extends View {
    _parentElement = document.querySelector(".bookmarks__list");

    render(bookmarks) {
        let html = "";
        if (bookmarks.size === 0)
            html = `<div class="message">
            <div>
              <svg>
                <use href="${icons}#icon-smile"></use>
              </svg>
            </div>
            <p>
              No bookmarks yet. Find a nice recipe and bookmark it :)
            </p>
            </div>`;
        else {
            html = this._generateHTML(bookmarks);
        }

        this._clear();
        this._parentElement.insertAdjacentHTML("afterbegin", html);
    }

    addHandler(handler) {
        window.addEventListener("load", handler);
    }

    _generateHTML(bookmarks) {
        let html = "";
        bookmarks.forEach(bm => {
            html += `<li class="preview">
            <a class="preview__link" href="#${bm.id}">
              <figure class="preview__fig">
                <img src="${bm.imageUrl}" alt="Test" />
              </figure>
              <div class="preview__data">
                <h4 class="preview__name">
                  ${bm.title}
                </h4>
                <p class="preview__publisher">${bm.publisher}</p>
              </div>
            </a>
          </li>`;
        });
        return html;
    }
}

export default new BookmarksView();