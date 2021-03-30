import { useEffect, useState } from 'react';
import { Container, Row, Col, Form, Button, Toast } from 'react-bootstrap';
import Section from '../Section';
import Title from '../Title';
import Hr from '../Hr';
import styles from './Contact.module.scss';

const Contact = () => {
	const [formInputs, setFormInputs] = useState({
		name: '',
		email: '',
		phone: '',
		subject: 'Choose...',
		message: '',
	});
	const [showToast, setShowToast] = useState(false);
	const update = (e) => {
		const {
			target: { name, value },
		} = e;
		setFormInputs({ ...formInputs, [name]: value });
	};

	const submitHandler = (e) => {
		e.preventDefault();
		setShowToast(true);
		setFormInputs({
			name: '',
			email: '',
			phone: '',
			subject: 'Choose...',
			message: '',
		});
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
						<Form onSubmit={submitHandler}>
							<Form.Row>
								<Form.Group
									sm="auto"
									lg={6}
									as={Col}
									controlId="name"
								>
									<Form.Label className="text-dark-2">
										Name
									</Form.Label>
									<Form.Control
										required
										type="name"
										name="name"
										placeholder="Darth Vader"
										value={formInputs.name}
										onChange={update}
									/>
								</Form.Group>

								<Form.Group
									sm="auto"
									lg={6}
									as={Col}
									controlId="email"
								>
									<Form.Label className="text-dark-2">
										Email
									</Form.Label>
									<Form.Control
										required
										type="email"
										name="email"
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
									controlId="phone"
								>
									<Form.Label className="text-dark-2">
										Phone
									</Form.Label>
									<Form.Control
										required
										type="phone"
										name="phone"
										placeholder="(555) 867 - 5309"
										value={formInputs.phone}
										onChange={update}
									/>
								</Form.Group>

								<Form.Group
									sm="auto"
									lg={6}
									as={Col}
									controlId="subject"
								>
									<Form.Label className="text-dark-2">
										In Need Of
									</Form.Label>
									<Form.Control
										required
										as="select"
										name="subject"
										value={formInputs.subject}
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

							<Form.Group controlId="message">
								<Form.Label className="text-dark-2">
									Example textarea
								</Form.Label>
								<Form.Control
									as="textarea"
									rows={3}
									name="message"
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
							<Toast
								className={styles.toast}
								show={showToast}
								onClose={() => setShowToast(false)}
								delay={3000}
								autohide
							>
								<Toast.Header>
									<strong className="mr-auto">
										Thank You!
									</strong>
									<small>Just Now</small>
								</Toast.Header>
								<Toast.Body>
									Your response has been submitted, Someone
									will be in contact Soon
								</Toast.Body>
							</Toast>
						</Form>
					</Col>
				</Row>
			</Container>
		</Section>
	);
};

export default Contact;
