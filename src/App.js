import React from 'react';
import './App.css';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			cityWeatherData: {},
			formData: {
				name: '',
			},
		};
		this.getCityWeatherData = this.getCityWeatherData.bind(this);
		this.processCityWeatherData = this.processCityWeatherData.bind(this);
		this.setWeatherData = this.setWeatherData.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleFormSubmit = this.handleFormSubmit.bind(this);
	}

	componentDidMount() {
		this.setWeatherData('quezon city');
	}

	async getCityWeatherData(cityName) {
		try {
			const apiKey = process.env.REACT_APP_OPENWEATHER_API_KEY;
			const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
			const response = await fetch(url, { mode: 'cors' });
			const cityWeatherData = await response.json();
			return cityWeatherData;
		} catch (err) {
			console.log(err);
		}
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
		try {
			const cityWeatherData = await this.getCityWeatherData(cityName);
			const processedCityWeatherData = this.processCityWeatherData(
				cityWeatherData
			);
			this.setState({ cityWeatherData: processedCityWeatherData });
		} catch (err) {
			console.log(err);
		}
	}

	handleInputChange(e) {
		const target = e.target;
		const value = target.value;
		const name = target.name;
		this.setState({
			formData: {
				[name]: value,
			},
		});
	}

	handleFormSubmit(e) {
		this.setWeatherData(this.state.formData.name);
		e.preventDefault();
	}

	render() {
		const { cityWeatherData, formData } = this.state;

		return (
			<div className="app">
				<Form
					data={formData}
					handleInputChange={this.handleInputChange}
					handleFormSubmit={this.handleFormSubmit}
				/>
				<Card data={cityWeatherData} />
			</div>
		);
	}
}

export default App;
