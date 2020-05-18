import React, { useContext } from "react";

import { Link } from "react-router-dom";

import LanguagesContext from "context/LanguagesContext";
import fr from "assets/img/fr.png";
import uk from "assets/img/uk.png";

const Navbar = () => {
	const { language, setLanguage } = useContext(LanguagesContext);

	return (
		<>
			<div>
				<Link to="/">Home</Link>
				<Link to="/about">About</Link>

				<div>
					{language === "en" ? (
						<img
							src={fr}
							width="50px"
							height="50px"
							alt=""
							onClick={() => setLanguage("fr")}
						/>
					) : (
						<img
							src={uk}
							width="50px"
							height="50px"
							alt=""
							onClick={() => setLanguage("en")}
						/>
					)}
				</div>
			</div>
		</>
	);
};

export default Navbar;
