import React, { useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";

import LanguagesContext from "context/LanguagesContext";
import { FormattedMessage } from "react-intl";

const Home = () => {
	const history = useHistory();
	const { language } = useContext(LanguagesContext);

	useEffect(() => {
		history.push(`/${language}`);
	}, [language]);

	return (
		<>
			<p>
				<FormattedMessage id="Titre" />
			</p>
		</>
	);
};

export default Home;
