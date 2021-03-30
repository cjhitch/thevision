import { Carousel, Button } from 'react-bootstrap';
import styles from './Hero.module.scss';

const Hero = () => {
	return (
		<section id="top" className={styles.Hero}>
			<h1
				className={`${styles.shadow} text-light-0 font-weight-normal h4`}
			>
				Find your new website, mobile app, or web design
			</h1>
			<div className={styles.overlay} />
			<Carousel
				interval={7000}
				className={styles.Carousel}
				nextIcon={<i className="fad fa-chevron-circle-right fa-3x" />}
				prevIcon={<i className="fad fa-chevron-circle-left fa-3x" />}
			>
				<Carousel.Item>
					<h2
						className={`${styles.shadow} display-1 text-light-4 font-weight-bolder`}
					>
						Creativity Meet
						<br /> Technology
					</h2>
					<p className={`${styles.shadow} text-light-0 h4`}>
						Whether you need a new app or new website, our expertise
						ensures the latest tech will bring your idea to life
					</p>
					<Button
						variant="primary"
						className="text-white px-4"
						href="/#products"
					>
						Learn More
					</Button>
				</Carousel.Item>
				<Carousel.Item>
					<h2
						className={`${styles.shadow} display-1 text-light-4 font-weight-bolder`}
					>
						Digital Marketing
						<br /> Services
					</h2>
					<p className={`${styles.shadow} text-light-0 h4`}>
						Need that or one of our many other expertieses? Let us
						know so we can figure out how to best help you grow
					</p>
					<Button
						variant="primary"
						className="text-white px-4"
						href="/#contact"
					>
						Learn More
					</Button>
				</Carousel.Item>
				<Carousel.Item>
					<h2
						className={`${styles.shadow} display-1 text-light-4 font-weight-bolder`}
					>
						A Partner
						<br /> For You
					</h2>
					<p className={`${styles.shadow} text-light-0 h4`}>
						We Employ proven strategies tailored to each business,
						learn what other clients had to say about us
					</p>
					<Button
						variant="primary"
						className="text-white px-4"
						href="/#reviews"
					>
						Learn More
					</Button>
				</Carousel.Item>
			</Carousel>
		</section>
	);
};

export default Hero;
