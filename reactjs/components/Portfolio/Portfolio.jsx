import Image from 'react-bootstrap/Image';
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
			<Container>
				<SRLWrapper>
					<Row>
						<Col sm={2} lg={4}>
							<Image src="/ia-1.png" fluid />
						</Col>
						<Col sm={2} lg={4}>
							<Image src="/c1-1.png" fluid />
						</Col>
						<Col sm={2} lg={4}>
							<Image src="/jav-1.png" fluid />
						</Col>
						<Col sm={2} lg={4}>
							<Image src="/pff-1.png" fluid />
						</Col>
						<Col sm={2} lg={4}>
							<Image src="/iss-1.png" fluid />
						</Col>
					</Row>
				</SRLWrapper>
			</Container>
		</Section>
	);
};

export default Portfolio;
