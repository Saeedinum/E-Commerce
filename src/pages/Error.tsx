import {useState, useEffect} from "react";
import {useRouteError, isRouteErrorResponse , Link } from "react-router-dom";
import image from "@assets/OIP.jpeg";

const Error = () => {
	const error = useRouteError();
	const [errorStatus, errorText]: [number, string] = isRouteErrorResponse(error) ? [error.status, error.statusText] : [404, "Page not found"];

	const [imageCount, setImageCount] = useState(0);
	useEffect(() => {
		const interval = setInterval(() => {
			setImageCount((prevCount) => prevCount + 1);
		}, 500);
		return () => clearInterval(interval);
	}, []);
	const imageHeight = imageCount % 2 === 0 ? 100 : 400;
	return (
		<>
			<div>
				<h1 style={{textAlign: "center"}}>
					Error: {errorStatus} - {errorText}
				</h1>
			</div>
			<div style={{display: "flex", justifyContent: "center", fontSize: "1.5rem" , alignItems: "center"}}>
				<Link to='/' replace={true}>Home</Link>
			</div>
			<div style={{display: "flex", justifyContent: "center", alignItems: "center", height: "100vh"}}>
				<img src={image} alt='error' height={imageHeight} />
			</div>
		</>
	);
};

export default Error;
