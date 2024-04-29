import {NavLink, useNavigate} from "react-router-dom";

import {useAppSelector} from "@store/hooks";

const {headerContainer, headerLogo, basketContainer, basketQuantity} = styles;
import {Badge, Navbar, Container, Nav} from "react-bootstrap";
import Logo from "../../../assets/cart.svg?react";
import styles from "./styles.module.css";

const Header = () => {
	const navigate = useNavigate();
	const cartSum = Object.values(useAppSelector((state) => state.cart.items)).reduce((acc : number, item : number) => {
		return acc + item;
	}, 0);
	return (
		<header>
			<div className={headerContainer}>
				<h1 className={headerLogo}>
					<Badge bg='info'>E-Commerce</Badge>
				</h1>
				<div className={basketContainer} onClick={() => navigate("/cart")} >
					<Logo></Logo>
					<div className={basketQuantity}>{cartSum}</div>
				</div>
			</div>
			<Navbar expand='lg' className='bg-body-tertiary' bg='dark' data-bs-theme='dark'>
				<Container>
					<Navbar.Toggle aria-controls='basic-navbar-nav' />
					<Navbar.Collapse id='basic-navbar-nav'>
						<Nav className='me-auto'>
							<Nav.Link as={NavLink} to='/'>
								Home
							</Nav.Link>
							<Nav.Link as={NavLink} to='/categories'>
								Categories
							</Nav.Link>
							<Nav.Link as={NavLink} to='/about-us'>
								About Us
							</Nav.Link>
						</Nav>
						<Nav>
							<Nav.Link as={NavLink} to='/login'>
								Login
							</Nav.Link>
							<Nav.Link as={NavLink} to='/register'>
								Register
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</header>
	);
};

export default Header;
