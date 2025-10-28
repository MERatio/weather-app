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
const incomingHoursCardsEl = document.querySelector('.js-incoming-hours-cards');
const incomingDaysCardsEl = document.querySelector('.js-incoming-days-cards');

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

function formatToAmPm(timeStr, hasMinutes) {
  const [hour, minute] = timeStr.split(':').map(Number);
  const amPm = hour >= 12 ? 'PM' : 'AM';
  const hour12 = hour % 12 || 12;
  if (hasMinutes) {
    return `${hour12}:${minute.toString().padStart(2, '0')} ${amPm}`;
  } else {
    return `${hour12} ${amPm}`;
  }
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

async function displayIncomingHoursData(weatherData) {
  function extractIncomingHoursData(currentEpoch, hoursData) {
    return hoursData.filter(
      (hourData) => hourData.datetimeEpoch > currentEpoch,
    );
  }

  const incomingHoursData = extractIncomingHoursData(
    weatherData.currentConditions.datetimeEpoch,
    weatherData.days[0].hours,
  );

  for (const incomingHourData of incomingHoursData) {
    const cardEl = document.createElement('li');
    cardEl.classList.add('card');

    const cardHourEl = document.createElement('p');
    cardHourEl.classList.add('card-title');
    cardHourEl.textContent = formatToAmPm(incomingHourData.datetime, false);
    cardEl.appendChild(cardHourEl);

    const cardPrecipEl = document.createElement('p');
    cardPrecipEl.classList.add('card-precip');
    cardPrecipEl.textContent = `${incomingHourData.precipprob}%`;
    cardEl.appendChild(cardPrecipEl);

    const cardIconEl = document.createElement('img');
    cardIconEl.classList.add('card-icon');
    cardIconEl.src = await getWeatherIconUrl(incomingHourData.icon);
    cardIconEl.alt = incomingHourData.conditions;
    cardEl.appendChild(cardIconEl);

    const cardTempEl = document.createElement('p');
    cardTempEl.classList.add('card-temp');
    cardTempEl.textContent = `${incomingHourData.temp}°`;
    cardEl.appendChild(cardTempEl);

    incomingHoursCardsEl.appendChild(cardEl);
  }
}

async function displayIncomingDaysData(weatherData) {
  const incomingDaysData = weatherData.days.slice(1);

  for (const incomingDayData of incomingDaysData) {
    const cardEl = document.createElement('li');
    cardEl.classList.add('card');

    const cardDayEl = document.createElement('p');
    cardDayEl.classList.add('card-title');
    cardDayEl.textContent = getDayName(incomingDayData.datetime, true);
    cardEl.appendChild(cardDayEl);

    const cardIconEl = document.createElement('img');
    cardIconEl.classList.add('card-icon');
    cardIconEl.src = await getWeatherIconUrl(incomingDayData.icon);
    cardIconEl.alt = incomingDayData.conditions;
    cardEl.appendChild(cardIconEl);

    const cardTempEl = document.createElement('p');
    cardTempEl.classList.add('card-temp');
    cardTempEl.textContent = `${incomingDayData.temp}°`;
    cardEl.appendChild(cardTempEl);

    incomingDaysCardsEl.appendChild(cardEl);
  }
}

async function displayWeatherData(weatherData) {
  const currentDayName = getDayName(weatherData.days[0].datetime, false);
  const currentTime = formatToAmPm(
    weatherData.currentConditions.datetime,
    true,
  );
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

  await displayIncomingHoursData(weatherData);
  await displayIncomingDaysData(weatherData);
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
