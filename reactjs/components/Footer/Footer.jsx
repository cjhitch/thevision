import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from 'react-icons/fi';
import Hr from '../Hr';
import styles from './Footer.module.scss';

const Footer = () => {
	const date = new Date();

	return (
		<Container as="footer" fluid className={`${styles.Footer} bg-dark`}>
			<Container className={styles.padSection}>
				<h2 className="sr-only">Footer</h2>
				<Row as="div">
					<Col as="section">
						<h3 className="sr-only">Logo</h3>
						<Image src="/logo-dark.svg" width={190} height={65} />
						<p className="mt-md-4">
							Your premier stop for Web and App development.
							Meticulously driven, each app is carefully fit to
							your need.
						</p>
						<div className={styles.social}>
							<Link href="https://www.facebook.com">
								<a className="d-inline-block">
									<FiFacebook size="1.5rem" />
								</a>
							</Link>
							<Link href="https://www.facebook.com">
								<a className="d-inline-block">
									<FiTwitter size="1.5rem" />
								</a>
							</Link>
							<Link href="https://www.facebook.com">
								<a className="d-inline-block">
									<FiInstagram size="1.5rem" />
								</a>
							</Link>
							<Link href="https://www.facebook.com">
								<a className="d-inline-block">
									<FiLinkedin size="1.5rem" />
								</a>
							</Link>
						</div>
					</Col>
					<Col as="section">
						<h3 className="h5 text-white">Get In Touch</h3>
						<Hr variant="secondary" />
						<Link href="">
							<a className={styles.a}>
								<i className="fal fa-phone-alt mr-2" />
								(702) 462 - 4682
							</a>
						</Link>
						<Link href="">
							<a className={styles.a}>
								<i className="fal fa-envelope-open mr-2" /> Send
								eMail
							</a>
						</Link>
						<Link href="">
							<a className={styles.a}>
								<i className="fal fa-compass mr-2" /> Las Vegas,
								Nevada
							</a>
						</Link>
						<Button
							className={styles.button}
							variant="outline-secondary"
						>
							Send a Message
						</Button>
					</Col>
					<Col as="section">
						<h3 className="h5 text-white">Quick Links</h3>
						<Hr variant="secondary" />
						<Link href="#">
							<a className={styles.a}>Services</a>
						</Link>
						<Link href="#">
							<a className={styles.a}>Reviews</a>
						</Link>
						<Link href="#">
							<a className={styles.a}>Faq</a>
						</Link>
						<Link href="#">
							<a className={styles.a}>Privacy Policy</a>
						</Link>
						<Link href="#">
							<a className={styles.a}>Terms & Conditions</a>
						</Link>
					</Col>
					<Col as="section" className="h5 text-white">
						Recent Posts
						<Hr variant="secondary" />
					</Col>
				</Row>
			</Container>
			<Row>
				<p
					className={`${styles.footerText} text-center bg-dark-0 w-100 mb-0`}
				>
					&copy; {date.getFullYear()} Visionary Creatives, All Rights
					Reserved
				</p>
			</Row>
		</Container>
	);
};

export default Footer;
