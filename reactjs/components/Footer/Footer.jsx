import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
	FiFacebook,
	FiTwitter,
	FiInstagram,
	FiLinkedin,
	FiCompass,
	FiPhone,
	FiMail,
} from 'react-icons/fi';
import styles from './Footer.module.scss';

const Footer = () => {
	return (
		<footer className={`${styles.Footer} bg-dark w-100`}>
			<h2 className="sr-only">Footer</h2>
			<section>
				<h3 className="sr-only">Logo</h3>
				<Image src="/logo-dark.svg" width={150} height={90} />
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit.
					Molestias odio neque doloribus harum?
				</p>
				<Link href="https://www.facebook.com">
					<a>
						<FiFacebook />
					</a>
				</Link>
				<Link href="https://www.facebook.com">
					<a>
						<FiTwitter />
					</a>
				</Link>
				<Link href="https://www.facebook.com">
					<a>
						<FiInstagram />
					</a>
				</Link>
				<Link href="https://www.facebook.com">
					<a>
						<FiLinkedin />
					</a>
				</Link>
			</section>
			<section>
				<h3 className="h5 text-white">Get In Touch</h3>
				<FiPhone /> (702) 462 - 4682
				<FiMail /> info@theVisionCreatives.com
				<FiCompass /> Las Vegas, Nevada
			</section>
		</footer>
	);
};

export default Footer;
