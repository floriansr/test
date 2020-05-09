import React, { useState, useEffect } from "react";
import Example from "components/Example";

const App = () => {
	const [data, setData] = useState("");

	useEffect(() => {
		setData();
	}, []);

	return (
		<>
			<Example name={data} />
		</>
	);
};

export default App;
