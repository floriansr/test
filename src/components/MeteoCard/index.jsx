import React from "react";

const MeteoCard = ({ cityname, countrycode }: MeteoCard) => {
	return (
		<>
			<p>{cityname}</p>
			<p>{countrycode}</p>
		</>
	);
};

export default MeteoCard;
