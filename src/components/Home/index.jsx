import React, { useContext } from "react";
import LanguagesContext from "context/LanguagesContext";
import { FormattedMessage } from "react-intl";

const Home = () => {
	const { setLanguage } = useContext(LanguagesContext);

	return (
		<>
			<p>
				<FormattedMessage id="Titre" />
			</p>

			<button type="button" onClick={() => setLanguage("en")}>
				English
			</button>

			<button type="button" onClick={() => setLanguage("fr")}>
				Français
			</button>
		</>
	);
};

export default Home;
