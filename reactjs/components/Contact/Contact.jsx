import Image from 'next/image';
import { Container, Row, Col } from 'react-bootstrap';
import Section from '../Section';
import Title from '../Title';
import Hr from '../Hr';
import styles from './Contact.module.scss';

const Contact = () => {
	return (
		<Section id="contact" fluid className="bg-dark-0">
			<Container>
				<Row>
					<Col lg={4}>
						<p className="text-primary h5">
							<i className="fad fa-dice-d20 mr-4 fa-2x"></i>Fill
							Out Form
						</p>
						<p className="text-primary h5">
							<i className="fad fa-dice-d20 mr-4 fa-2x mt-3"></i>
							We Will Contact You
						</p>
						<p className="text-primary h5">
							<i className="fad fa-dice-d20 mr-4 fa-2x mt-3"></i>
							Figure Out Needs
						</p>
						<p className="text-primary h5">
							<i className="fad fa-dice-d20 mr-4 fa-2x mt-3"></i>
							Build Something Awesome
						</p>
					</Col>
					<Col lg={8}>
						<Hr variant="primary" />
						<Title
							className="text-light-4"
							alignment="left"
							title="Ready to Build Something Awesome?"
						/>
					</Col>
				</Row>
			</Container>
		</Section>
	);
};

export default Contact;
