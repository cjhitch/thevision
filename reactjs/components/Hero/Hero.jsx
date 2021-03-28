import { Carousel } from 'react-bootstrap';
import styles from './Hero.module.scss';

const Hero = () => {
	return (
		<section className={styles.Hero}>
			<div className={styles.overlay} />
			<Carousel
				interval={5000}
				className={styles.Carousel}
				nextIcon={<i className="fal fa-chevron-circle-right fa-2x" />}
				prevIcon={<i className="fal fa-chevron-circle-left fa-2x" />}
			>
				<Carousel.Item>
					<h1 className="display-1 text-light-4">
						First slide label
					</h1>
					<p className="text-light-0">
						Nulla vitae elit libero, a pharetra augue mollis
						interdum.
					</p>
				</Carousel.Item>
				<Carousel.Item>
					<h1 className="display-1 text-light-4">
						First slide label
					</h1>
					<p className="text-light-0">
						Nulla vitae elit libero, a pharetra augue mollis
						interdum.
					</p>
				</Carousel.Item>
				<Carousel.Item>
					<h1 className="display-1 text-light-4">
						First slide label
					</h1>
					<p className="text-light-0">
						Nulla vitae elit libero, a pharetra augue mollis
						interdum.
					</p>
				</Carousel.Item>
			</Carousel>
		</section>
	);
};

export default Hero;
