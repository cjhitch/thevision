import { Container, Row, Col, Carousel } from 'react-bootstrap';
import Section from '../Section';
import Title from '../Title';
import styles from './Reviews.module.scss';

const Reviews = () => {
	return (
		<Section
			id="reviews"
			fluid
			className={`${styles.Reviews} bg-dark-3 py-5`}
		>
			<Title
				title="What Our Clients Have to Say"
				titleClass="text-light-4"
				pre="Take a Look at our Reviews"
				preClass="text-dark-5"
			/>
			<Container>
				<Row>
					<Col
						xl={{ span: 6, offset: 3 }}
						lg={{ span: 8, offset: 2 }}
						className="text-center"
					>
						<i className="fad fa-quote-left fa-4x mt-n5 mb-3"></i>
						<Carousel
							className={`${styles.carousel} text-light-0`}
							controls={false}
						>
							<Carousel.Item>
								<h3 className="h5">
									The word is Excellent! I love it! you did a
									great job! The website worked accordingly.
								</h3>
								<p>Mary S.</p>
							</Carousel.Item>
							<Carousel.Item>
								<h3 className="h5">
									Nothing to say except...THE GUY IS
									INCREDIBLE! Stunning outcome!
								</h3>
								<p>Brian B.</p>
							</Carousel.Item>
							<Carousel.Item>
								<h3 className="h5">
									...he gave a lesson on how to keep the site
									current and make changes on my own. ...would
									employee Chris again for any web design
									needs.
								</h3>
								<p>Josh M.</p>
							</Carousel.Item>
						</Carousel>
					</Col>
				</Row>
			</Container>
		</Section>
	);
};

export default Reviews;
