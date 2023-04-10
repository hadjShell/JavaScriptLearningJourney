import L from "leaflet";
import "leaflet/dist/leaflet.css";

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

// CLass declarations
class Workout {
    #id;
    #date;
    #distance;
    #duration;
    #coords;
    #name;
    static count = 0;

    constructor(data) {
        this.#id = ++Workout.count;
        this.#distance = data.distance;
        this.#duration = data.duration;
        this.#coords = data.coords;
        this.#date = Intl.DateTimeFormat("en-GB", { month: "long", day: "numeric" }).format(new Date());
        this.#name = data.name;
    }

    getId() {
        return this.#id;
    }

    getName() {
        return this.#name;
    }

    getDate() {
        return this.#date;
    }

    getDistance() {
        return this.#distance;
    }

    getDuration() {
        return this.#duration;
    }

    getCoords() {
        return this.#coords;
    }
}

class Running extends Workout {
    #cadence;
    #pace;

    constructor(data) {
        super(data);
        this.#cadence = data.cadence;
        this.#pace = this.getDuration() / this.getDistance();
    }

    getCadence() {
        return this.#cadence;
    }

    getPace() {
        return this.#pace;
    }
}

class Cycling extends Workout {
    #elevation;
    #speed;

    constructor(data) {
        super(data);
        this.#elevation = data.elevation;
        this.#speed = this.getDuration() / this.getDistance();
    }

    getElevation() {
        return this.#elevation;
    }

    getSpeed() {
        return this.#speed;
    }
}

class App {
    static workouts = [];
    #currentCoords;
    #map;
    #mapMarker;

    constructor() { }

    // Back-end functions
    _createWorkout(submission) {
        let workout = null;
        switch (submission.name) {
            case "running":
                workout = new Running(submission);
                break;
            case "cycling":
                workout = new Cycling(submission);
        }
        App.workouts.push(workout);
        return workout;
    }

    // Front-end functions
    _enableLocation() {
        navigator.geolocation.getCurrentPosition(
            this._renderMap.bind(this),
            function () {
                alert("Couldn't get your location!");
            });
    }

    _renderMap(position) {
        const { latitude, longitude } = position.coords;
        this.#currentCoords = [latitude, longitude];
        this.#map = L.map('map').setView(this.#currentCoords, 13);
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(this.#map);
        L.popup({ closeOnClick: false, autoClose: false }).setLatLng(this.#currentCoords).setContent("Your current position").openOn(this.#map);
        // click map
        this.#map.on("click", e => {
            if (this.#mapMarker) this.#map.removeLayer(this.#mapMarker);
            const { lat, lng } = e.latlng;
            this.#currentCoords = [lat, lng];
            this.#mapMarker = L.marker(this.#currentCoords).addTo(this.#map);
            // show form
            form.classList.remove("hidden");
            inputDistance.focus();
        });
    }

    _renderWorkout(workout) {
        // render list
        const workoutElement = document.createElement("li");
        const name = workout.getName();
        const title = `${name[0].toUpperCase() + name.slice(1)} on ${workout.getDate()}`;
        workoutElement.classList.add("workout", `workout--${name}`);
        workoutElement.dataset.id = workout.getId();
        workoutElement.innerHTML = `<h2 class="workout__title">${title}</h2>
        <div class="workout__details">
          <span class="workout__icon">${name === "running" ? "🏃‍♂️" : "🚴‍♀️"}</span>
          <span class="workout__value">${workout.getDistance()}</span>
          <span class="workout__unit">km</span>
        </div>
        <div class="workout__details">
          <span class="workout__icon">⏱</span>
          <span class="workout__value">${workout.getDuration()}</span>
          <span class="workout__unit">min</span>
        </div>
        <div class="workout__details">
          <span class="workout__icon">⚡️</span>
          <span class="workout__value">${name === "running" ? workout.getPace() : workout.getSpeed()}</span>
          <span class="workout__unit">${name === "running" ? "min/km" : "km/h"}</span>
        </div>
        <div class="workout__details">
          <span class="workout__icon">${name === "running" ? "🦶🏼" : "⛰"}</span>
          <span class="workout__value">${name === "running" ? workout.getCadence() : workout.getElevation()}</span>
          <span class="workout__unit">${name === "running" ? "spm" : "m"}</span>
        </div>`;
        form.after(workoutElement);

        // render marker
        L.marker(workout.getCoords(), { closeOnClick: false, autoClose: false })
            .addTo(this.#map)
            .bindPopup(title, { closeOnClick: false, autoClose: false, className: `${name}-popup` }).openPopup();
    }

    _renderWorkouts() {
        App.workouts.forEach(this._renderWorkout.bind(this));
        containerWorkouts.addEventListener("click", (e) => {
            const clicked = e.target.closest(".workout");
            if (!clicked) return;

            this.#map.flyTo(App.searchCoordsById(clicked.dataset.id));;
        });
    }

    _addSubmissionListener() {
        inputType.addEventListener("change", () => {
            inputCadence.parentElement.classList.toggle("form__row--hidden");
            inputElevation.parentElement.classList.toggle("form__row--hidden");
        });
        form.addEventListener("submit", e => {
            e.preventDefault();

            const submission = {
                name: inputType.value,
                distance: Number(inputDistance.value),
                duration: Number(inputDuration.value),
                coords: this.#currentCoords
            }
            if (inputType.value === "running")
                submission.cadence = Number(inputCadence.value);
            else
                submission.elevation = Number(inputElevation.value);
            inputDistance.value = inputDuration.value = inputCadence.value = inputElevation.value = "";
            form.classList.add("hidden");

            const workout = this._createWorkout.call(this, submission);
            this._renderWorkout.call(this, workout);
        });
    }

    static searchCoordsById(id) {
        return App.workouts.find(workout => workout.getId() === Number(id)).getCoords();
    }

    init() {
        this._enableLocation();
        this._renderWorkouts();
        this._addSubmissionListener();
    }
}

const app = new App();
app.init();