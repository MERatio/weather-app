import React from 'react';
import './App.css';

class App extends React.Component {
	constructor() {
		super();
		this.state = {};
		this.getCityWeatherData = this.getCityWeatherData.bind(this);
	}

	async getCityWeatherData(cityName) {
		const apiKey = process.env.REACT_APP_OPENWEATHER_API_KEY;
		const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;
		const response = await fetch(url, { mode: 'cors' });
		const cityWeatherData = await response.json();
		console.log(cityWeatherData);
	}

	componentDidMount() {
		this.getCityWeatherData('london');
	}

	render() {
		return <h1>Weather App</h1>;
	}
}

export default App;
