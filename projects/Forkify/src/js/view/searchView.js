import View from "./view";

class SearchView extends View {
    _parentElement = document.querySelector(".search");
    _errorMessage = "";


    addHandler(handler) {
        this._parentElement.addEventListener("submit", e => {
            e.preventDefault();
            handler();

        });
    }

    getQuery() {
        const field = this._parentElement.querySelector(".search__field");
        const query = field.value;
        field.value = "";
        return query;
    }

}

export default new SearchView();