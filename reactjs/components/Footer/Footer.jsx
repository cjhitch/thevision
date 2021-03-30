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
					<Col xs={12} sm={6} lg={3} as="section">
						<h3 className="sr-only">Logo</h3>
						<Image
							alt="Visionary Creatives corporate dark logo"
							src="/logo-dark.svg"
							width={190}
							height={65}
						/>
						<p className="mt-md-4">
							Your premier stop for Web and App development.
							Meticulously driven, each app is carefully fit to
							your need.
						</p>
						<div className={styles.social}>
							<Link href="https://www.facebook.com/VisionaryCreatives">
								<a
									aria-label="Go to Visionary Creatives Facebook page"
									className="d-inline-block"
								>
									<FiFacebook size="1.5rem" />
								</a>
							</Link>
							<Link href="https://twitter.com/visionary_creat">
								<a
									aria-label="Go to Visionary Creatives Twitter page"
									className="d-inline-block"
								>
									<FiTwitter size="1.5rem" />
								</a>
							</Link>
							<Link href="https://www.instagram.com">
								<a
									aria-label="Go to Visionary Creatives Instagram"
									className="d-inline-block"
								>
									<FiInstagram size="1.5rem" />
								</a>
							</Link>
							<Link href="https://www.linkedin.com/company/visionary-creatives">
								<a
									aria-label="Go to Visionary Creatives Linkedin page"
									className="d-inline-block"
								>
									<FiLinkedin size="1.5rem" />
								</a>
							</Link>
						</div>
					</Col>
					<Col xs={12} sm={6} lg={3} as="section">
						<h3 className="h5 text-white">Get In Touch</h3>
						<Hr variant="secondary" />
						<Link href="tel:+17024624682">
							<a className={styles.a}>
								<i
									aria-hidden
									className="fal fa-phone-alt mr-2"
								/>
								(702) 462 - 4682
							</a>
						</Link>
						<Link href="mailto:info@thevisioncreatives.com">
							<a className={styles.a}>
								<i
									aria-hidden
									className="fal fa-envelope-open mr-2"
								/>
								Send email
							</a>
						</Link>
						<Link href="https://goo.gl/maps/ApaZJH5eu8URABww8">
							<a className={styles.a}>
								<i
									aria-hidden
									className="fal fa-compass mr-2"
								/>
								Las Vegas, Nevada
							</a>
						</Link>
						<Link href="/#contact">
							<Button
								as="button"
								className={styles.button}
								variant="outline-secondary"
							>
								Send a Message
							</Button>
						</Link>
					</Col>
					<Col xs={12} sm={6} lg={3} as="section">
						<h3 className="h5 text-white">Quick Links</h3>
						<Hr variant="secondary" />
						<Link href="/#products">
							<a className={styles.a}>Products</a>
						</Link>
						<Link href="/#reviews">
							<a className={styles.a}>Reviews</a>
						</Link>
						<Link href="/privacy">
							<a className={styles.a}>Privacy Policy</a>
						</Link>
						<Link href="/terms">
							<a className={styles.a}>Terms & Conditions</a>
						</Link>
					</Col>
					<Col xs={12} sm={6} lg={3} as="section">
						<h3 className="h5 text-white">Recent Posts</h3>
						<Hr variant="secondary" />
					</Col>
				</Row>
			</Container>
			<Row>
				<p
					className={`${styles.footerText} text-center bg-dark-0 w-100 mb-0 py-3`}
				>
					&copy; {date.getFullYear()} Visionary Creatives, All Rights
					Reserved
				</p>
			</Row>
		</Container>
	);
};

export default Footer;
