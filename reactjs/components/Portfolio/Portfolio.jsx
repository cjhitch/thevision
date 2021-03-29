import Image from 'react-bootstrap/Image';
import SimpleReactLightbox from 'simple-react-lightbox';
import { SRLWrapper } from 'simple-react-lightbox';
import { Container, Row, Col } from 'react-bootstrap';
import Section from '../Section';
import Title from '../Title';
import styles from './Portfolio.module.scss';

const Portfolio = () => {
	return (
		<Section
			fluid
			className={`${styles.Portfolio} bg-light-1`}
			id="portfolio"
		>
			<Title
				title="We Did Stuff"
				titleClass="text-dark-0"
				pre="A Look at Our Portfolio"
				preClass="text-dark-2"
			/>
			<SimpleReactLightbox>
				<Container>
					<SRLWrapper>
						<Row>
							<Col sm={6} lg={4}>
								<Image
									alt="Global asset management system, entire scss architecture with mixins and placeholders for consistency, multiple applications including video carousel, component library for reuse"
									fluid
									src="/c1-1.png"
								/>
							</Col>
							<Col sm={6} lg={4}>
								<Image
									alt="Frontend and backend Reactjs Build. Created entire API, architected database and set up Docker instance for project"
									src="/ia-1.png"
									fluid
								/>
							</Col>
							<Col sm={6} lg={4}>
								<Image
									alt="Database and API architected using Sequelize. Mobile application for maintenance built and served on the app store"
									src="/jav-1.png"
									fluid
								/>
							</Col>
							<Col sm={6} lg={4}>
								<Image
									alt="One of many print designs created and printed."
									src="/lvp-1.png"
									fluid
								/>
							</Col>
							<Col sm={6} lg={4}>
								<Image
									alt="Corporate website for ISS. Full functioning with secondary hover navigation. Fully responsive, mobile and accessibility friendly."
									src="/iss-1.png"
									fluid
								/>
							</Col>
							<Col sm={6} lg={4}>
								<Image
									alt="Full ecommerce site complete with subscription shipping and variations for custom furniture"
									src="/gcf-1.png"
									fluid
								/>
							</Col>
							<Col sm={6} lg={4}>
								<Image
									alt="Marathon listing site to find marathons anywhere in the world complete with third party ticketing"
									src="/kwr-1.png"
									fluid
								/>
							</Col>
							<Col sm={6} lg={4}>
								<Image
									alt="Full car wrap designed and implemented on car. Can still be seen driving the streets of MN"
									src="/pff-1.png"
									fluid
								/>
							</Col>
							<Col sm={6} lg={4}>
								<Image
									alt="Pokemon tracking and trading application with full API, database architecture, Redux store, and crud implementation"
									src="/cap-1.png"
									fluid
								/>
							</Col>
						</Row>
					</SRLWrapper>
				</Container>
			</SimpleReactLightbox>
		</Section>
	);
};

export default Portfolio;
