import error from "./error.json";
import home from "./home.json";

const en = {
	...error,
	...home,
	/* On concatène tous nos objets JSON en un seul */
};

export default en;
