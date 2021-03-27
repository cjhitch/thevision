import { useState } from 'react';
import Image from 'next/image';
import { Navbar, Nav, Button, Form, FormControl, Modal } from 'react-bootstrap';
import './Header.module.scss';

const Header = () => {
	const [show, setShow] = useState(false);
	return (
		<>
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
				</Navbar.Collapse>
				<div className="d-none d-md-block">
					<Form inline>
						<FormControl
							type="text"
							placeholder="Search"
							className="mr-sm-2"
						/>
						<Button variant="link">
							<i aria-hidden className="fal fa-search" />
						</Button>
					</Form>
					<Button variant="secondary">Let&#39;s Begin</Button>
				</div>
			</Navbar>
			<Modal
				show={show}
				onHide={() => setShow(false)}
				dialogClassName="modal-100w"
				aria-labelledby="example-custom-modal-styling-title"
			>
				<Modal.Header closeButton>
					<Modal.Title id="example-custom-modal-styling-title">
						Custom Modal Styling
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<p>
						Ipsum molestiae natus adipisci modi eligendi? Debitis
						amet quae unde commodi aspernatur enim, consectetur.
						Cumque deleniti temporibus ipsam atque a dolores
						quisquam quisquam adipisci possimus laboriosam.
						Quibusdam facilis doloribus debitis! Sit quasi quod
						accusamus eos quod. Ab quos consequuntur eaque quo rem!
						Mollitia reiciendis porro quo magni incidunt dolore amet
						atque facilis ipsum deleniti rem!
					</p>
				</Modal.Body>
			</Modal>
		</>
	);
};

export default Header;
