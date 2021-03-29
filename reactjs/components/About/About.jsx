import Image from 'next/image';
import { Container, Row, Col } from 'react-bootstrap';
import Section from '../Section';
import Title from '../Title';

const About = () => {
	return (
		<Section fluid id="about">
			<Container>
				<Row>
					<Col sm={12} lg={6}>
						<Image
							src="/deco1.png"
							layout="fill"
							alt="technology in the palm of your hand and design boards"
						/>
					</Col>
					<Col sm={12} lg={{ span: 6, order: 'first' }}>
						<Title
							alignment="left"
							title="About Us - All Our Weird Quirks and Cool Stuff Too!"
							titleClass="text-secondary"
							pre="Welcome to Visionary Creatives"
							preClass="text-dark-4"
							post={
								<>
									<i
										className={`fad fa-quote-left fa-sm mr-2 text-primary`}
									></i>
									<span>
										Christopher started the company in 2011
										after beginning a cleaning company.
										Finding a website was necessary he
										worked on learning that and quickly fell
										in love. Years later, he has helped
										hundreds of business owners establish
										their online presence and voice.
									</span>
									<br />
									<br />
									<span>
										With over a decade of experience in the
										web industry we have worked on hundreds
										of websites. Our expertise encompasses
										the full gammit. With many applications
										and websites including architected APIs
										and databases we have something for
										everyone. Utilizing modern technologies
										such as React and Vue, whether you need
										ecommerce, application development, web
										design, or a new website we've got you
										covered.
									</span>
								</>
							}
							postClass="text-dark-4"
						/>
					</Col>
				</Row>
			</Container>
		</Section>
	);
};

export default About;
