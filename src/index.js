const searchForm = document.querySelector('.js-search-form');

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

searchForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const locationInput = searchForm.querySelector('.js-location-input');
  const location = locationInput.value.trim();

  const weatherData = await getWeatherData(location);
  console.log(weatherData);
});
