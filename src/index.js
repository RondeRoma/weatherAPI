import css from "./css/styles.css";
// import "./js/fetch.js";
import refs from "./js/refs.js";
import Weather from "./js/class.js";

const { input, inputBtn } = refs;
const myWeather = new Weather(refs);
inputBtn.addEventListener("click", () => {
  if (!input.value) return;
  myWeather.getFetch(input.value);
});

input.addEventListener("keyup", (e) => {
  if (!input.value) return;
  if (e.key === "Enter") {
    myWeather.getFetch(input.value);
  }
});
