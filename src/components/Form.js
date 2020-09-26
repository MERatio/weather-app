import React from 'react';
import './Form.css';

function Form(props) {
	const { data, handleInputChange, handleFormSubmit } = props;

	return (
		<form onSubmit={handleFormSubmit} className="weather-form">
			<input
				type="text"
				name="name"
				className="weather-form-name"
				value={data.name}
				onChange={handleInputChange}
				placeholder="City name"
			/>
			<button type="submit" className="weather-form-submit">
				Go
			</button>
		</form>
	);
}

export default Form;
