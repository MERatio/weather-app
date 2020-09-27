import React from 'react';
import './ErrorMessage.css';

function ErrorMessage() {
	return (
		<h1 className="error-message">
			Weather data not found, check your spelling or try again later.
		</h1>
	);
}

export default ErrorMessage;
