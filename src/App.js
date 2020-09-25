import React from 'react';
import './App.css';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			cityWeatherData: {},
		};
		this.getCityWeatherData = this.getCityWeatherData.bind(this);
		this.processCityWeatherData = this.processCityWeatherData.bind(this);
		this.setWeatherData = this.setWeatherData.bind(this);
	}

	componentDidMount() {
		this.setWeatherData('quezon city');
	}

	async getCityWeatherData(cityName) {
		const apiKey = process.env.REACT_APP_OPENWEATHER_API_KEY;
		const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
		const response = await fetch(url, { mode: 'cors' });
		const cityWeatherData = await response.json();
		return cityWeatherData;
	}

	processCityWeatherData(weatherData) {
		return {
			name: weatherData.name,
			country: weatherData.sys.country,
			temp: weatherData.main.temp,
			description: weatherData.weather[0].description,
		};
	}

	async setWeatherData(cityName) {
		const cityWeatherData = await this.getCityWeatherData(cityName);
		const processedCityWeatherData = this.processCityWeatherData(
			cityWeatherData
		);
		this.setState({ cityWeatherData: processedCityWeatherData });
		console.log(this.state.cityWeatherData);
	}

	render() {
		return <h1>Weather App</h1>;
	}
}

export default App;
