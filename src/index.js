import './style.css';

const searchForm = document.querySelector('.js-search-form');
const locationEl = document.querySelector('.js-location');
const currentWeatherDayTime = document.querySelector(
  '.js-current-weather-day-time',
);
const currentWeatherIconEl = document.querySelector('.js-current-weather-icon');
const currentWeatherTempEl = document.querySelector('.js-current-weather-temp');
const currentWeatherFeelsLike = document.querySelector(
  '.js-current-weather-feels-like',
);
const currentWeatherCondition = document.querySelector(
  '.js-current-weather-condition',
);
const currentWeatherPrecip = document.querySelector(
  '.js-current-weather-precip',
);
const currentWeatherHumidity = document.querySelector(
  '.js-current-weather-humidity',
);
const currentWeatherWind = document.querySelector('.js-current-weather-wind');

async function getWeatherData(location) {
  const API_KEY = 'PGBQ5TKSZ5E7BP2KZ2YTFXPHU';
  const apiEndpoint = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&key=${API_KEY}&contentType=json`;
  try {
    const response = await fetch(apiEndpoint);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    } else {
      const weatherData = await response.json();
      return weatherData;
    }
  } catch (error) {
    console.error(error.message);
  }
}

function getDayName(dateStr, isShort) {
  const date = new Date(dateStr);
  const dayName = date.toLocaleDateString('en-us', {
    weekday: isShort ? 'short' : 'long',
  });
  return dayName;
}

function formatToAmPm(timeStr) {
  const [hour, minute] = timeStr.split(':').map(Number);
  const amPm = hour >= 12 ? 'PM' : 'AM';
  const hour12 = hour % 12 || 12;
  return `${hour12}:${minute.toString().padStart(2, '0')} ${amPm}`;
}

async function getWeatherIconUrl(iconName) {
  try {
    const iconModule = await import(
      `./assets/icons/visual-crossing-1st-set-weather-icon/${iconName}.svg`
    );
    return iconModule.default; // This is the URL to the image
  } catch (error) {
    console.error(error.message);
  }
}

async function displayWeatherData(weatherData) {
  const currentDayName = getDayName(weatherData.days[0].datetime, false);
  const currentTime = formatToAmPm(weatherData.currentConditions.datetime);
  const currentWeatherIconUrl = await getWeatherIconUrl(
    weatherData.currentConditions.icon,
  );

  locationEl.textContent = weatherData.resolvedAddress;
  currentWeatherDayTime.textContent = `${currentDayName} ${currentTime}`;
  currentWeatherIconEl.src = currentWeatherIconUrl;
  currentWeatherIconEl.alt = weatherData.currentConditions.conditions;
  currentWeatherTempEl.textContent = `${weatherData.currentConditions.temp}°C`;
  currentWeatherFeelsLike.textContent = `${weatherData.currentConditions.feelslike}°C`;
  currentWeatherCondition.textContent =
    weatherData.currentConditions.conditions;
  currentWeatherPrecip.textContent = `${weatherData.currentConditions.precipprob}%`;
  currentWeatherHumidity.textContent = `${weatherData.currentConditions.humidity}%`;
  currentWeatherWind.textContent = `${weatherData.currentConditions.windspeed} km/h`;
}

searchForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const locationInput = searchForm.querySelector('.js-location-input');
  const location = locationInput.value.trim();

  const weatherData = await getWeatherData(location);
  if (!weatherData) {
    return;
  }

  await displayWeatherData(weatherData);
});
