import React from 'react';

function Form(props) {
	const { data, handleInputChange, handleFormSubmit } = props;

	return (
		<form onSubmit={handleFormSubmit}>
			<input
				type="text"
				name="name"
				value={data.name}
				onChange={handleInputChange}
				placeholder="City name"
			/>
			<button type="submit">Go</button>
		</form>
	);
}

export default Form;
