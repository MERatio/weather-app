"use strict";

const WEATHER_API_API_KEY = "7d3db2c9e6624ad8aed41548231611";

function getDateStandardHour(date) {
  return new Intl.DateTimeFormat(undefined, {
    hour12: true,
    hour: "numeric",
  }).format(date);
}

function getDayName(date) {
  return new Intl.DateTimeFormat(undefined, { weekday: "long" }).format(date);
}

function processWeatherData(weatherForecastData) {
  const localDate = new Date(weatherForecastData.location.localtime);
  const currentHourForecast =
    weatherForecastData.forecast.forecastday[0].hour[localDate.getHours()];
  return {
    location: {
      name: weatherForecastData.location.name,
      country: weatherForecastData.location.country,
    },
    currentHour: {
      temp_c: currentHourForecast.temp_c,
      temp_f: currentHourForecast.temp_f,
      chance_of_rain: currentHourForecast.chance_of_rain,
      humidity: currentHourForecast.humidity,
      wind_kph: currentHourForecast.wind_kph,
      wind_mph: currentHourForecast.wind_mph,
      dayName: getDayName(localDate),
      standardHour: getDateStandardHour(localDate),
      conditionIcon: `https:${currentHourForecast.condition.icon}`,
      conditionText: currentHourForecast.condition.text,
    },
  };
}

async function fetchWeatherForecastData(query) {
  const res = await fetch(
    `http://api.weatherapi.com/v1/forecast.json?key=${WEATHER_API_API_KEY}&q=${query}`,
  );
  const weatherForecastData = await res.json();
  return weatherForecastData;
}

async function logWeatherData() {
  const query = "london";
  const weatherForecastData = await fetchWeatherForecastData(query);
  const weatherData = processWeatherData(weatherForecastData);
  console.log(weatherData);
}

logWeatherData();
