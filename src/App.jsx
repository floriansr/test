import React, { useState, useEffect } from "react";
import MeteoCard from "components/MeteoCard";
import MeteoDays from "components/MeteoDays";

const App = () => {
	const [key] = useState("744c79ce1af0431295598f3427ca4de1");
	const [isLoading, setIsLoading] = useState(true);
	const [cityName, setCityName] = useState("");
	const [countryCode, setCountryCode] = useState("");
	const [dataList, setDataList] = useState();

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
					setCountryCode(response.country_code);

					let week = response.data.slice(0, 5);

					updateMyData(week);

					setIsLoading(false);
				})
				.catch((error) => console.error("error:", error));
		});
	}, [key]);

	const updateMyData = (data) => {
		setDataList(data);
	};

	const renderedItem = (
		<div>
			<MeteoCard cityname={cityName} countrycode={countryCode} />
			<MeteoDays week={dataList} />
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
