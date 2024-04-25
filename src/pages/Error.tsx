import {useState, useEffect} from "react";
import image from "@assets/OIP.jpeg";

const Error = () => {
	const [imageCount, setImageCount] = useState(0);
	useEffect(() => {
		const interval = setInterval(() => {
			setImageCount((prevCount) => prevCount + 1);
		}, 500);
		return () => clearInterval(interval);
	}, []);
	const imageHeight = imageCount % 2 === 0 ? 100 : 400;
	return (
		<div style={{display: "flex", justifyContent: "center", alignItems: "center", height: "100vh"}}>
			<img src={image} alt='error' height={imageHeight} />
		</div>
	);
};

export default Error;
