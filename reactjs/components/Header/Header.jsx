import { useState } from 'react';
import Image from 'next/image';
import { Navbar, Nav, Button, Form, FormControl, Modal } from 'react-bootstrap';
import styles from './Header.module.scss';

const Header = ({ scroll }) => {
	const [show, setShow] = useState(false);
	return (
		<header className={`${styles.Header} ${scroll ? styles.sticky : ''}`}>
			<Navbar className={styles.nav}>
				<Navbar.Brand href="#home">
					<Image src="/logo-dark.svg" width={190} height={65} />
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Nav className="mx-auto d-none d-lg-flex">
					<Nav.Link href="#home">Home</Nav.Link>
					<Nav.Link href="#link">Link</Nav.Link>
				</Nav>
				<div className="d-none d-lg-flex">
					<Form inline>
						<Button variant="link">
							<i aria-hidden className="fal fa-search" />
						</Button>
						<FormControl
							type="text"
							placeholder="Search"
							className={`${styles.form} mr-sm-2`}
						/>
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
		</header>
	);
};

export default Header;
