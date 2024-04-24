import {Container} from "react-bootstrap";
import styles from "./styles.module.css";
const {contaier, wrapper} = styles;
import Header from "../../components/common/Header/Header";
const MainLayout = () => {
	return (
		<Container>
			<Header></Header>
		</Container>
	);
};

export default MainLayout;
