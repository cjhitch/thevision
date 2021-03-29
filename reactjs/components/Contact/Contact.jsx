import { useState } from 'react';
import Image from 'next/image';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Section from '../Section';
import Title from '../Title';
import Hr from '../Hr';
import styles from './Contact.module.scss';

const Contact = () => {
	const [formInputs, setFormInputs] = useState({
		name: '',
		email: '',
		phone: '',
		subject: '',
		message: '',
	});
	const update = (e) => {
		const {
			target: { name, value },
		} = e;
		setFormInputs({ ...formInputs, [name]: value });
	};
	return (
		<Section id="contact" fluid className="bg-dark-0">
			<Container>
				<Hr variant="primary" />
				<Title
					className="text-light-4"
					alignment="left"
					title="Ready to Build Something Awesome?"
					titleClass="h3"
				/>
				<Row>
					<Col lg={4}>
						<p className="text-primary h5">
							<i className="fad fa-dice-d20 mr-4 fa-2x"></i>Fill
							Out Form
						</p>
						<p className="text-primary h5">
							<i className="fad fa-dice-d20 mr-4 fa-2x mt-3"></i>
							We Contact You
						</p>
						<p className="text-primary h5">
							<i className="fad fa-dice-d20 mr-4 fa-2x mt-3"></i>
							Establish Needs & Wants
						</p>
						<p className="text-primary h5">
							<i className="fad fa-dice-d20 mr-4 fa-2x mt-3"></i>
							Build Something Awesome
						</p>
					</Col>
					<Col lg={8}>
						<Form>
							<Form.Row>
								<Form.Group
									sm="auto"
									lg={6}
									as={Col}
									controlId="formGridName"
								>
									<Form.Label className="text-dark-2">
										Name
									</Form.Label>
									<Form.Control
										type="name"
										placeholder="Darth Vader"
										value={formInputs.name}
										onChange={update}
									/>
								</Form.Group>

								<Form.Group
									sm="auto"
									lg={6}
									as={Col}
									controlId="formGridEmail"
								>
									<Form.Label className="text-dark-2">
										Email
									</Form.Label>
									<Form.Control
										type="email"
										placeholder="email@email.com"
										value={formInputs.email}
										onChange={update}
									/>
								</Form.Group>
							</Form.Row>
							<Form.Row>
								<Form.Group
									sm="auto"
									lg={6}
									as={Col}
									controlId="formGridPhone"
								>
									<Form.Label className="text-dark-2">
										Phone
									</Form.Label>
									<Form.Control
										type="phone"
										placeholder="(555) 867 - 5309"
										value={formInputs.phone}
										onChange={update}
									/>
								</Form.Group>

								<Form.Group
									sm="auto"
									lg={6}
									as={Col}
									controlId="formGridSubject"
								>
									<Form.Label className="text-dark-2">
										In Need Of
									</Form.Label>
									<Form.Control
										as="select"
										defaultValue="Choose..."
										value={formInputs.name}
										onChange={update}
									>
										<option disabled>Choose...</option>
										<option>New Website</option>
										<option>Mobile App</option>
										<option>Ecommerce</option>
										<option>Business Consultant</option>
										<option>
											Digital Marketing Service
										</option>
										<option>Web Design</option>
										<option>Other</option>
									</Form.Control>
								</Form.Group>
							</Form.Row>

							<Form.Group controlId="formGridAddress1">
								<Form.Label className="text-dark-2">
									Example textarea
								</Form.Label>
								<Form.Control
									as="textarea"
									rows={3}
									value={formInputs.message}
									onChange={update}
								/>
							</Form.Group>

							<Button
								className={`${styles.button} px-5`}
								variant="outline-primary"
								type="submit"
							>
								Submit
							</Button>
						</Form>
					</Col>
				</Row>
			</Container>
		</Section>
	);
};

export default Contact;
