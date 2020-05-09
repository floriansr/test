import React, { useState, useEffect } from "react";
import MeteoCard from "components/MeteoCard";

const App = () => {
	const [key] = useState("744c79ce1af0431295598f3427ca4de1");
	const [isLoading, setIsLoading] = useState(true);
	const [cityName, setCityName] = useState("");

	useEffect(() => {
		navigator.geolocation.getCurrentPosition((position) => {
			const tmp = position.coords;
			fetch(
				`https://api.weatherbit.io/v2.0/forecast/daily?lat=${tmp.latitude}&lon=${tmp.longitude}&key=${key}`
			)
				.then((response) => response.json())
				.then((response) => {
					// const city = { name: response.city_name };

					setCityName(response.city_name);
					console.log(response);
					setIsLoading(false);
				})
				.catch((error) => console.error("error:", error));
		});
	}, [key]);

	const renderedItem = (
		<div>
			<MeteoCard cityname={cityName} />
		</div>
	);

	return (
		<>
			{isLoading ? (
				<p>
					Veuillez patienter, nous sommes entrain de vous localiser...
				</p>
			) : (
				renderedItem
			)}
		</>
	);
};

export default App;

// week.map((x) => (
// setDays(response.data);

// ))
