import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Container, Row, Col, Button } from 'react-bootstrap';
import {
	FiFacebook,
	FiTwitter,
	FiInstagram,
	FiLinkedin,
	FiCompass,
	FiPhone,
	FiMail,
} from 'react-icons/fi';
import Hr from '../Hr';
import styles from './Footer.module.scss';

const Footer = () => {
	return (
		<Container as="footer" fluid className={`${styles.Footer} bg-dark`}>
			<Container>
				<h2 className="sr-only">Footer</h2>
				<Row as="div">
					<Col as="section">
						<h3 className="sr-only">Logo</h3>
						<Image src="/logo-dark.svg" width={190} height={65} />
						<p className="mt-md-4">
							Lorem ipsum dolor sit amet, consectetur adipisicing
							elit. Molestias odio neque doloribus harum?
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
					<Col as="section" className={styles.touch}>
						<h3 className="h5 text-white">Get In Touch</h3>
						<Hr variant="secondary" />
						<Link href="">
							<a>
								<FiPhone /> (702) 462 - 4682
							</a>
						</Link>
						<Link href="">
							<a>
								<FiMail /> info@theVisionCreatives.com
							</a>
						</Link>
						<Link href="">
							<a>
								<FiCompass /> Las Vegas, Nevada
							</a>
						</Link>
						<Button variant="outline-secondary">
							Send a Message
						</Button>
					</Col>
					<Col as="section">
						<h3 className="h5 text-white">Quick Links</h3>
						<Link href="#">
							<a>Services</a>
						</Link>
						<Link href="#">
							<a>Reviews</a>
						</Link>
						<Link href="#">
							<a>Faq</a>
						</Link>
						<Link href="#">
							<a>Privacy Policy</a>
						</Link>
						<Link href="#">
							<a>Terms & Conditions</a>
						</Link>
					</Col>
					<Col as="section" className="h5 text-white">
						Recent Posts
					</Col>
				</Row>
			</Container>
		</Container>
	);
};

export default Footer;
