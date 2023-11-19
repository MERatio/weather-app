const searchForm = document.getElementById("searchForm");
const queryInput = searchForm.querySelector(".queryInput");
const locationHeader = document.querySelector(".locationHeader");
const currentHourConditionIcon = document.querySelector(
  ".currentHourConditionIcon",
);
const currentHourTempSpan = document.querySelector(".currentHourTempSpan");
const unitOfTempBtns = document.querySelectorAll(".unitOfTempBtn");
const currentDateHeader = document.querySelector(".currentDateHeader");
const conditionText = document.querySelector(".conditionText");
const hourForecastList = document.querySelector(".hourForecastList");

function getUnitOfTempSymbol(unitOfTemp) {
  const tempSymbols = {
    celcius: "&#176;C",
    fahrenheit: "&#176;F",
  };
  return tempSymbols[unitOfTemp];
}

function updateActiveUnitOfTempBtn(unitOfTemp) {
  unitOfTempBtns.forEach((unitOfTempBtn) => {
    unitOfTempBtn.classList.remove("active");
  });
  const newActiveUnitOfTempBtn = document.querySelector(
    `[data-unit-of-temp="${unitOfTemp}"]`,
  );
  newActiveUnitOfTempBtn.classList.add("active");
}

function getStandardHour(date) {
  const dateTime = Intl.DateTimeFormat(undefined, {
    hour12: true,
    hour: "numeric",
  }).format(date);

  const spaceIndex = dateTime.indexOf(" ");
  const result =
    dateTime.slice(0, spaceIndex) + ":00" + dateTime.slice(spaceIndex);
  return result;
}

function getDayName(date) {
  return new Intl.DateTimeFormat(undefined, { weekday: "long" }).format(date);
}

function createHourForecastItem(hourForecastData, unitOfTemp) {
  const hourForecastItem = document.createElement("li");
  hourForecastItem.classList.add(
    "mx-auto",
    "flex",
    "flex-col",
    "items-center",
    "min-w-max",
  );
  const hourP = document.createElement("p");
  hourP.textContent = getStandardHour(new Date(hourForecastData.time));
  hourForecastItem.append(hourP);
  const hourForecastImg = document.createElement("img");
  hourForecastImg.classList.add("icon-small", "-mt-1");
  hourForecastImg.src = `https:${hourForecastData.condition.icon}`;
  hourForecastImg.alt = hourForecastData.condition.text;
  hourForecastItem.append(hourForecastImg);
  const tempSymbol = getUnitOfTempSymbol(unitOfTemp);
  const hourTemp =
    unitOfTemp === "celcius"
      ? hourForecastData.temp_c
      : hourForecastData.temp_f;
  const hourTempP = document.createElement("p");
  hourTempP.classList.add("ml-1");
  hourTempP.innerHTML = `${hourTemp}${tempSymbol}`;
  hourForecastItem.append(hourTempP);
  return hourForecastItem;
}

function displayCurrentHourData(currentHourData, unitOfTemp, localTimeDate) {
  currentHourConditionIcon.src = `https:${currentHourData.condition.icon}`;
  currentHourConditionIcon.alt = currentHourData.condition.text;
  currentHourTempSpan.textContent =
    unitOfTemp === "celcius" ? currentHourData.temp_c : currentHourData.temp_f;
  currentDateHeader.textContent = `${getDayName(
    localTimeDate,
  )} ${getStandardHour(localTimeDate)}`;
  conditionText.textContent = currentHourData.condition.text;
}

function displayTodayHourForecastData(
  todayHourForecastData,
  unitOfTemp,
  localTimeDate,
) {
  const currentHour = localTimeDate.getHours();
  const currentHourData = todayHourForecastData[currentHour];
  const todayHourForeCastDataExceptCurrentHour = todayHourForecastData.slice([
    currentHour + 1,
  ]);
  displayCurrentHourData(currentHourData, unitOfTemp, localTimeDate);
  hourForecastList.replaceChildren();
  if (todayHourForeCastDataExceptCurrentHour.length === 0) {
    return;
  }
  for (const hourForecastData of todayHourForeCastDataExceptCurrentHour) {
    const hourForecastItem = createHourForecastItem(
      hourForecastData,
      unitOfTemp,
    );
    hourForecastList.append(hourForecastItem);
  }
}

function displayWeatherData(weatherData, unitOfTemp) {
  const { name, country, localtime } = weatherData.location;
  const todayHourForecastData = weatherData.forecast.forecastday[0].hour;
  const localTimeDate = new Date(localtime);
  locationHeader.textContent = `${name}, ${country}`;
  displayTodayHourForecastData(
    todayHourForecastData,
    unitOfTemp,
    localTimeDate,
  );
}

export {
  searchForm,
  queryInput,
  unitOfTempBtns,
  updateActiveUnitOfTempBtn,
  displayWeatherData,
};
