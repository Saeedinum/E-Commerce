import styles from "./styles.module.css";
const {headerContainer, headerLogo, basketContainer, basketQuantity} = styles;
import Logo from "../../../assets/cart.svg?react";
import {Badge, Navbar, Container, Nav, NavDropdown} from "react-bootstrap";
const Header = () => {
	return (
		<header>
			<div className={headerContainer}>
				<h1 className={headerLogo}>
					<Badge bg='info'>E-Commerce</Badge>
				</h1>
				<div className={basketContainer}>
					<Logo></Logo>
					<div className={basketQuantity}>0</div>
				</div>
			</div>
			<Navbar expand='lg' className='bg-body-tertiary' bg='dark' data-bs-theme='dark'>
				<Container>
					<Navbar.Toggle aria-controls='basic-navbar-nav' />
					<Navbar.Collapse id='basic-navbar-nav'>
						<Nav className='me-auto'>
							<Nav.Link href='#home'>Home</Nav.Link>
							<Nav.Link href='#link'>Category</Nav.Link>
						</Nav>
						<Nav className=''>
							<Nav.Link href='#home'>Login</Nav.Link>
							<Nav.Link href='#link'>Register</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</header>
	);
};

export default Header;
