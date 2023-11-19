"use strict";

import {
  searchForm,
  queryInput,
  unitOfTempBtns,
  updateActiveUnitOfTempBtn,
  displayWeatherData,
} from "./js/dom.js";
import { fetchWeatherForecastData } from "./js/fetchWeather";
import "./style.css";

let unitOfTemp = "celcius";
let weatherData;

async function handleSearchFormSubmit(e) {
  e.preventDefault();
  const query = queryInput.value;
  weatherData = await fetchWeatherForecastData(query, 3);
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
  unitOfTempBtns.forEach((unitOfTempBtn) => {
    unitOfTempBtn.addEventListener("click", handleUnitOfTempBtnClick);
  });
  weatherData = await fetchWeatherForecastData("lucban", 3);
  updateActiveUnitOfTempBtn(unitOfTemp);
  displayWeatherData(weatherData, unitOfTemp);
}

init();
