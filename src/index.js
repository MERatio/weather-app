"use strict";

import "./style.css";

const WEATHER_API_API_KEY = "7d3db2c9e6624ad8aed41548231611";

const searchForm = document.getElementById("searchForm");
const queryInput = searchForm.querySelector(".queryInput");

// Forecast data that is availbale is 3 days for free plan, which is what I'm using.
async function fetchWeatherForecastData(query, days = 3) {
  const res = await fetch(
    `http://api.weatherapi.com/v1/forecast.json?key=${WEATHER_API_API_KEY}&q=${query}&days=${days}`,
  );
  const weatherForecastData = await res.json();
  return weatherForecastData;
}

async function logWeatherData(query) {
  const weatherForecastData = await fetchWeatherForecastData(query, 3);
  console.log(weatherForecastData);
}

function handleSearchFormSubmit(e) {
  e.preventDefault();
  const query = queryInput.value;
  logWeatherData(query);
  queryInput.value = "";
}

searchForm.addEventListener("submit", handleSearchFormSubmit);

logWeatherData("london");
