import React from 'react';
import './Card.css';

function Card(props) {
	const { data } = props;
	const { name, country, temp, description } = data;

	return (
		<div className="card abs-center">
			<h1 className="card-title">{`${name}, ${country}`}</h1>
			<p className="card-text">{temp}&#8451;</p>
			<p className="card-text">{description}</p>
		</div>
	);
}

export default Card;
