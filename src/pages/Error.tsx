import {useRouteError, isRouteErrorResponse, Link} from "react-router-dom";
import Lottie from "lottie-react";
import errorAnimation from "@assets/lottie.json";

const Error = () => {
	const error = useRouteError();
	const [errorStatus, errorText]: [number, string] = isRouteErrorResponse(error) ? [error.status, error.statusText] : [404, "Page not found"];

	return (
		<>
			<div>
				<h1 style={{textAlign: "center"}}>
					Error: {errorStatus} - {errorText}
				</h1>
			</div>
			<div style={{display: "flex", justifyContent: "center", fontSize: "1.5rem", alignItems: "center"}}>
				<Link to='/' replace={true}>
					Home
				</Link>
			</div>
			<div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
				<Lottie animationData={errorAnimation} style={{width: "40%", height: "40%"}} />
			</div>
		</>
	);
};

export default Error;
