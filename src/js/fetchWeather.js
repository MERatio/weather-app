import { WEATHER_API_API_KEY } from "./apiKeys";

// Forecast data that is availbale is 3 days for free plan, which is what I'm using.
async function fetchWeatherForecastData(query, days = 3) {
  const res = await fetch(
    `http://api.weatherapi.com/v1/forecast.json?key=${WEATHER_API_API_KEY}&q=${query}&days=${days}`,
  );
  const weatherForecastData = await res.json();
  return weatherForecastData;
}

export { fetchWeatherForecastData };
