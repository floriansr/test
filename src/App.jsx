import React, { useState } from "react";
import { IntlProvider } from "react-intl";

import fr from "assets/translation/fr";
import en from "assets/translation/en";
import LanguagesContext from "context/LanguagesContext";

import Home from "components/Home";

const messages = {
	fr,
	en,
};

const App = () => {
	const [language, setLanguage] = useState("fr");

	return (
		<>
			<IntlProvider locale={language} messages={messages[language]}>
				<LanguagesContext.Provider value={{ setLanguage }}>
					<Home />
				</LanguagesContext.Provider>
			</IntlProvider>
		</>
	);
};

export default App;
