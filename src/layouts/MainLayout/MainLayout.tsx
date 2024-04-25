import {Container} from "react-bootstrap";
import {Outlet} from "react-router-dom";
import styles from "./styles.module.css";
const {container, wrapper} = styles;
import Header from "@components/common/Header/Header";
import Footer from "@components/common/Footer/Footer";
const MainLayout = () => {
	return (
		<Container className={container}>
			<Header></Header>
			<div className={wrapper}>
				<Outlet />
			</div>
			<Footer></Footer>
		</Container>
	);
};

export default MainLayout;
