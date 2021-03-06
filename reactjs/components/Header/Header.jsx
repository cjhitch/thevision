import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Navbar, Nav, Button, Form, FormControl, Modal } from 'react-bootstrap';
import styles from './Header.module.scss';

const Header = ({ scroll }) => {
	const [show, setShow] = useState(false);
	return (
		<header className={`${styles.Header} ${scroll ? styles.sticky : ''}`}>
			<Navbar className={styles.nav}>
				<Link href="/">
					<a aria-label="navigate home">
						<Image
							src="/logo-dark.svg"
							width={scroll ? 190 : 190}
							height={scroll ? 45 : 65}
							alt="Visionary Creatives lightbulb logo with company name title"
						/>
					</a>
				</Link>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Nav className="mx-auto d-none d-lg-flex">
					<Link href="/#top">
						<a className={`${styles.link} h5`}>Home</a>
					</Link>
					<Link href="/#products">
						<a className={`${styles.link} h5`}>Products</a>
					</Link>
					<Link href="/#portfolio">
						<a className={`${styles.link} h5`}>Portfolio</a>
					</Link>
					<Link href="/#reviews">
						<a className={`${styles.link} h5`}>Reviews</a>
					</Link>
					<Link href="/#about">
						<a className={`${styles.link} h5`}>About</a>
					</Link>
					<Link href="/#contact">
						<a className={`${styles.link} h5`}>Contact</a>
					</Link>
				</Nav>
				<div className="d-none d-lg-flex">
					{/* <Form inline>
						<Button variant="link">
							<i aria-hidden className="fal fa-search" />
						</Button>
						<FormControl
							type="text"
							placeholder="Search"
							className={`${styles.form} mr-sm-2`}
						/>
					</Form> */}
					<Button
						href="/#contact"
						className={styles.button}
						variant="secondary"
					>
						Let&#39;s Begin
					</Button>
				</div>
				<Button
					className="ml-auto d-lg-none"
					variant="outline-dark-5"
					onClick={() => setShow(true)}
				>
					<span className="sr-only">Open Menu</span>
					<i aria-hidden className="fal fa-bars px-2 fa-lg" />
				</Button>
			</Navbar>
			<Modal
				show={show}
				onHide={() => setShow(false)}
				dialogClassName={styles.modal}
			>
				<Modal.Header closeButton />
				<Modal.Body>
					<Link href="/#top">
						<a
							onClick={() => setShow(false)}
							className={`${styles.link} h3`}
						>
							Home
						</a>
					</Link>
					<Link href="/#products">
						<a
							onClick={() => setShow(false)}
							className={`${styles.link} h3 mt-3`}
						>
							Products
						</a>
					</Link>
					<Link href="/#portfolio">
						<a
							onClick={() => setShow(false)}
							className={`${styles.link} h3 mt-3`}
						>
							Portfolio
						</a>
					</Link>
					<Link href="/#reviews">
						<a
							onClick={() => setShow(false)}
							className={`${styles.link} h3 mt-3`}
						>
							Reviews
						</a>
					</Link>
					<Link href="/#about">
						<a
							onClick={() => setShow(false)}
							className={`${styles.link} h3 mt-3`}
						>
							About
						</a>
					</Link>
					<Link href="/#contact">
						<a
							onClick={() => setShow(false)}
							className={`${styles.link} h3 mt-3`}
						>
							Contact
						</a>
					</Link>
				</Modal.Body>
			</Modal>
		</header>
	);
};

export default Header;
