import React from 'react'
import { Route } from "react-router-dom";
import { useSelector } from "react-redux"

const AuthRoute = ({ component: Component, ...rest } : AuthRoute) => {

	const logStatus = useSelector(state => state.log.log);

	return (
		<>
			<Route {...rest} render={props => (logStatus) ? ( <Component {...props} />) : ( <p>Welcome on My Social Network. This website is a training to Redux and React. We use auth and routing to create a small social media website.</p>)} />
		</>
	);
}

export default AuthRoute