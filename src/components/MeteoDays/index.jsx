import React from "react";
import shortid from "shortid";

const MeteoDays = ({ week }: MeteoDays) => {
	const dayConverter = [
		"Dimanche",
		"Lundi",
		"Mardi",
		"Mercredi",
		"Jeudi",
		"Vendredi",
		"Samedi",
	];
	console.log(week);

	const getDayFromDate = (value) => {
		const date = new Date(value);
		return dayConverter[date.getDay()];
	};

	return (
		<>
			<div id="container">
				{week.map((data) => (
					<div key={shortid.generate()} className="day">
						<p>{getDayFromDate(data.datetime)}</p>
						<img
							src={`https://www.weatherbit.io/static/img/icons/${data.weather.icon}.png`}
							alt={data.weather.description}
						/>
						<p>
							max: {data.high_temp}, min: {data.min_temp}
						</p>
					</div>
				))}
			</div>
		</>
	);
};

export default MeteoDays;
