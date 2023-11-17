"use strict";

const WEATHER_API_API_KEY = "7d3db2c9e6624ad8aed41548231611";

async function fetchWeatherForecastData(q) {
  const res = await fetch(
    `http://api.weatherapi.com/v1/forecast.json?key=${WEATHER_API_API_KEY}&q=${q}`,
  );
  const weatherForecastData = await res.json();
  return weatherForecastData;
}

async function logWeatherForecastData() {
  const q = "london";
  const weatherForecastData = await fetchWeatherForecastData(q);
  console.log(weatherForecastData);
}

logWeatherForecastData();
