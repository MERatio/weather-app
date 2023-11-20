/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/js/dom.js
const main = document.querySelector("main");
const mainSpinnerContainer = document.querySelector(".mainSpinnerContainer");
const searchForm = document.getElementById("searchForm");
const queryInput = searchForm.querySelector(".queryInput");
const locationHeader = document.querySelector(".locationHeader");
const currentHourConditionIcon = document.querySelector(".currentHourConditionIcon");
const currentHourTempSpan = document.querySelector(".currentHourTempSpan");
const unitOfTempBtns = document.querySelectorAll(".unitOfTempBtn");
const currentDateHeader = document.querySelector(".currentDateHeader");
const conditionP = document.querySelector(".conditionP");
const currentHourChanceOfRainSpan = document.querySelector(".currentHourChanceOfRainSpan");
const currentHourHumiditySpan = document.querySelector(".currentHourHumiditySpan");
const currentHourWindSpan = document.querySelector(".currentHourWindSpan");
const hourForecastList = document.querySelector(".hourForecastList");
function getUnitOfTempSymbol(unitOfTemp) {
  const tempSymbols = {
    celcius: "&#176;C",
    fahrenheit: "&#176;F"
  };
  return tempSymbols[unitOfTemp];
}
function updateActiveUnitOfTempBtn(unitOfTemp) {
  unitOfTempBtns.forEach(unitOfTempBtn => {
    unitOfTempBtn.classList.remove("active");
  });
  const newActiveUnitOfTempBtn = document.querySelector(`[data-unit-of-temp="${unitOfTemp}"]`);
  newActiveUnitOfTempBtn.classList.add("active");
}
function getStandardHour(date) {
  const dateTime = Intl.DateTimeFormat(undefined, {
    hour12: true,
    hour: "numeric"
  }).format(date);
  const spaceIndex = dateTime.indexOf(" ");
  const result = dateTime.slice(0, spaceIndex) + ":00" + dateTime.slice(spaceIndex);
  return result;
}
function getDayName(date) {
  return new Intl.DateTimeFormat(undefined, {
    weekday: "long"
  }).format(date);
}
function createHourForecastItem(hourForecastData, unitOfTemp) {
  const hourForecastItem = document.createElement("li");
  hourForecastItem.classList.add("mx-auto", "flex", "flex-col", "items-center", "min-w-max");
  const hourP = document.createElement("p");
  hourP.textContent = getStandardHour(new Date(hourForecastData.time));
  hourForecastItem.append(hourP);
  const hourForecastImg = document.createElement("img");
  hourForecastImg.classList.add("icon-small", "-mt-1");
  hourForecastImg.src = `https:${hourForecastData.condition.icon}`;
  hourForecastImg.alt = hourForecastData.condition.text;
  hourForecastItem.append(hourForecastImg);
  const tempSymbol = getUnitOfTempSymbol(unitOfTemp);
  const hourTemp = unitOfTemp === "celcius" ? hourForecastData.temp_c : hourForecastData.temp_f;
  const hourTempP = document.createElement("p");
  hourTempP.classList.add("ml-1");
  hourTempP.innerHTML = `${hourTemp}${tempSymbol}`;
  hourForecastItem.append(hourTempP);
  return hourForecastItem;
}
function displayHourForecastItems(hour24ForecastDataExceptCurrentHour, unitOfTemp) {
  hourForecastList.replaceChildren();
  for (const hourForecastData of hour24ForecastDataExceptCurrentHour) {
    const hourForecastItem = createHourForecastItem(hourForecastData, unitOfTemp);
    hourForecastList.append(hourForecastItem);
  }
}
function displayCurrentHourData(currentHourData, unitOfTemp, localTimeDate) {
  currentHourConditionIcon.src = `https:${currentHourData.condition.icon}`;
  currentHourConditionIcon.alt = currentHourData.condition.text;
  currentHourTempSpan.textContent = unitOfTemp === "celcius" ? currentHourData.temp_c : currentHourData.temp_f;
  currentDateHeader.textContent = `${getDayName(localTimeDate)} ${getStandardHour(localTimeDate)}`;
  conditionP.textContent = currentHourData.condition.text;
  currentHourChanceOfRainSpan.textContent = currentHourData.chance_of_rain + "%";
  currentHourHumiditySpan.textContent = currentHourData.humidity + "%";
  if (unitOfTemp === "celcius") {
    currentHourWindSpan.textContent = currentHourData.wind_kph + " km/h";
  } else {
    currentHourWindSpan.textContent = currentHourData.wind_mph + " mph";
  }
}
function get24HourForecastDataExceptCurrentHour(todayHoursForecastDataExceptCurrentHour, tomorrowHoursForecastData) {
  let result = [...todayHoursForecastDataExceptCurrentHour];
  for (const hourForecastData of tomorrowHoursForecastData) {
    if (result.length >= 24) {
      break;
    }
    result = [...result, hourForecastData];
  }
  return result;
}
function displayWeatherData(weatherData, unitOfTemp) {
  const {
    name,
    country,
    localtime
  } = weatherData.location;
  const localTimeDate = new Date(localtime);
  const todayHoursForecastData = weatherData.forecast.forecastday[0].hour;
  const currentHour = localTimeDate.getHours();
  const currentHourData = todayHoursForecastData[currentHour];
  const todayHoursForecastDataExceptCurrentHour = todayHoursForecastData.slice(currentHour + 1);
  const tomorrowHoursForecastData = weatherData.forecast.forecastday[1].hour;
  const hour24ForecastDataExceptCurrentHour = get24HourForecastDataExceptCurrentHour(todayHoursForecastDataExceptCurrentHour, tomorrowHoursForecastData);
  locationHeader.textContent = `${name}, ${country}`;
  displayCurrentHourData(currentHourData, unitOfTemp, localTimeDate);
  displayHourForecastItems(hour24ForecastDataExceptCurrentHour, unitOfTemp);
}
function hideMainContentAndShowMainSpinner() {
  main.classList.add("hidden");
  mainSpinnerContainer.classList.remove("hidden");
}
function showMainAndHideMainSpinner() {
  main.classList.remove("hidden");
  mainSpinnerContainer.classList.add("hidden");
}

;// CONCATENATED MODULE: ./src/js/apiKeys.js
const WEATHER_API_API_KEY = "7d3db2c9e6624ad8aed41548231611";

;// CONCATENATED MODULE: ./src/js/fetchWeather.js



// Forecast data that is availbale is 3 days for free plan, which is what I'm using.
async function fetchWeatherForecastData(query) {
  let days = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 3;
  hideMainContentAndShowMainSpinner();
  const res = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${WEATHER_API_API_KEY}&q=${query}&days=${days}`);
  const weatherForecastData = await res.json();
  showMainAndHideMainSpinner();
  return weatherForecastData;
}

;// CONCATENATED MODULE: ./src/index.js





let unitOfTemp = "celcius";
let weatherData;
async function handleSearchFormSubmit(e) {
  e.preventDefault();
  const query = queryInput.value;
  weatherData = await fetchWeatherForecastData(query, 3);
  if (weatherData.error) {
    return window.alert(weatherData.error.message);
  }
  displayWeatherData(weatherData, unitOfTemp);
  queryInput.value = "";
}
function handleUnitOfTempBtnClick(e) {
  const newUnitOfTemp = e.currentTarget.dataset.unitOfTemp;
  if (newUnitOfTemp === unitOfTemp) {
    return;
  }
  unitOfTemp = newUnitOfTemp;
  updateActiveUnitOfTempBtn(unitOfTemp);
  displayWeatherData(weatherData, unitOfTemp);
}
async function init() {
  searchForm.addEventListener("submit", handleSearchFormSubmit);
  unitOfTempBtns.forEach(unitOfTempBtn => {
    unitOfTempBtn.addEventListener("click", handleUnitOfTempBtnClick);
  });
  weatherData = await fetchWeatherForecastData("London", 3);
  if (weatherData.error) {
    return window.alert(weatherData.error.message);
  }
  updateActiveUnitOfTempBtn(unitOfTemp);
  displayWeatherData(weatherData, unitOfTemp);
}
init();
/******/ })()
;
//# sourceMappingURL=app.bundle.js.map