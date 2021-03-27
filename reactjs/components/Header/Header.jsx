import Image from 'next/image';
import { Navbar, Nav, Button, Form, FormControl } from 'react-bootstrap';
import './Header.module.scss';

const Header = () => {
	return (
		<Navbar expand="lg">
			<Navbar.Brand href="#home">
				<Image src="/logo.svg" width={190} height={65} />
			</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="mx-auto">
					<Nav.Link href="#home">Home</Nav.Link>
					<Nav.Link href="#link">Link</Nav.Link>
				</Nav>
				<Form inline>
					<FormControl
						type="text"
						placeholder="Search"
						className="mr-sm-2"
					/>
					<Button variant="link">
						<i className="fal fa-search" />
					</Button>
				</Form>
				<Button variant="secondary">Let&#39;s Begin</Button>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default Header;
