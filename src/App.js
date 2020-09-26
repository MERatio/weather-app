import React from 'react';
import './App.css';
import Form from './components/Form';
import Card from './components/Card';
import Spinner from './components/Spinner';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			cityWeatherData: {},
			formData: {
				name: '',
			},
			scale: 'c',
			isDataReady: false,
		};
		this.getCityWeatherData = this.getCityWeatherData.bind(this);
		this.processCityWeatherData = this.processCityWeatherData.bind(this);
		this.setWeatherData = this.setWeatherData.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleFormSubmit = this.handleFormSubmit.bind(this);
		this.handleScaleChange = this.handleScaleChange.bind(this);
	}

	componentDidMount() {
		this.setWeatherData('quezon city');
	}

	_toCelsius(f) {
		return ((f - 32) * 5) / 9;
	}

	_toFahrenheit(c) {
		return (c * 9) / 5 + 32;
	}

	_tryConvert(temp, convert) {
		const output = convert(temp);
		const rounded = Math.round(output * 1000) / 1000;
		return rounded;
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
		const temp = weatherData.main.temp;
		const scale = this.state.scale;
		const newTemp =
			scale === 'c' ? temp : this._tryConvert(temp, this._toFahrenheit);
		return {
			name: weatherData.name,
			country: weatherData.sys.country,
			temp: newTemp,
			description: weatherData.weather[0].description,
		};
	}

	async setWeatherData(cityName) {
		try {
			this.setState({ isDataReady: false });
			const cityWeatherData = await this.getCityWeatherData(cityName);
			const processedCityWeatherData = this.processCityWeatherData(
				cityWeatherData
			);
			setTimeout(() => {
				this.setState({
					cityWeatherData: processedCityWeatherData,
					isDataReady: true,
				});
			}, 500);
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

	handleScaleChange(e) {
		const isScale = Array.from(e.target.classList).includes('scale');
		if (!isScale) return;
		const temp = this.state.cityWeatherData.temp;
		const clickedScale = e.target.id;
		const newScale = clickedScale === 'c' ? 'c' : 'f';
		const newTemp =
			newScale === 'c'
				? this._tryConvert(temp, this._toCelsius)
				: this._tryConvert(temp, this._toFahrenheit);
		this.setState((prevState) => {
			return {
				cityWeatherData: {
					...prevState.cityWeatherData,
					temp: newTemp,
				},
				scale: newScale,
			};
		});
	}

	render() {
		const { cityWeatherData, formData, scale, isDataReady } = this.state;
		const output = isDataReady ? (
			<Card
				data={cityWeatherData}
				scale={scale}
				handleScaleChange={this.handleScaleChange}
			/>
		) : (
			<Spinner />
		);

		return (
			<div className="app">
				<Form
					data={formData}
					handleInputChange={this.handleInputChange}
					handleFormSubmit={this.handleFormSubmit}
				/>
				<div className="output abs-center">{output}</div>
			</div>
		);
	}
}

export default App;
