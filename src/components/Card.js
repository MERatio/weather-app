import React from 'react';
import './Card.css';

function Card(props) {
	const { data, scale, handleScaleChange } = props;
	const { name, country, temp, description } = data;

	const celsiusClass = `scale ${scale === 'c' ? 'activeScale' : ''}`;
	const fahrenheitClass = `scale ${scale === 'f' ? 'activeScale' : ''}`;

	return (
		<div className="card">
			<h1 className="card-title">{`${name}, ${country}`}</h1>
			<p className="card-text">
				{temp}{' '}
				<span className="scale-container" onClick={handleScaleChange}>
					<span className={celsiusClass} id="c">
						&#8451;
					</span>{' '}
					|{' '}
					<span className={fahrenheitClass} id="f">
						&#8457;
					</span>
				</span>
			</p>
			<p className="card-text">{description}</p>
		</div>
	);
}

export default Card;
