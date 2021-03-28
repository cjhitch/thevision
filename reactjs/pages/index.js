import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { Container, Row } from 'react-bootstrap';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Section from '../components/Section';
import Title from '../components/Title';
import CardFlip from '../components/CardFlip';
import Footer from '../components/Footer';
// import styles from '../styles/Home.module.scss';

export default function Home() {
	const [scroll, setScroll] = useState(false);

	const onScroll = () => {
		setScroll(window.scrollY > 28);
	};
	useEffect(() => {
		window.addEventListener('scroll', onScroll);
	}, []);

	return (
		<>
			<Head>
				<title>Create Next App</title>
				<link rel="icon" href="/favicon.ico" />
				<link
					rel="stylesheet"
					href="https://pro.fontawesome.com/releases/v5.15.3/css/all.css"
					integrity="sha384-iKbFRxucmOHIcpWdX9NTZ5WETOPm0Goy0WmfyNcl52qSYtc2Buk0NCe6jU1sWWNB"
					crossOrigin="anonymous"
				/>
			</Head>
			<Header scroll={scroll} />
			<main>
				<Hero />
				<Section fluid className="bg-dark-0">
					<Title
						title="We Design Digital Products That Help Grow Businesses"
						pre="Services We Are Offering"
						preClass="text-primary"
						post="We are committed to providing our customers with exceptional service
						while offering our employees the best training."
						postClass="text-light-0"
						className="text-white"
					/>
					<Container>
						<Row>
							<CardFlip
								sm={1}
								md={2}
								lg={3}
								front={
									<>
										<i className="fad fa-laptop-code fa-4x mb-3"></i>
										<h4>Website Development</h4>
									</>
								}
								back={
									<p>
										<i className="fad fa-quote-left mr-3"></i>
										If you need a new website, touch up, or
										major overhaul, we have over a decade of
										experience partnering with business
										owners like yourself. Our expertise in
										modern technologies helps ensure your
										site is modern and works as hard as you
									</p>
								}
							/>
							<CardFlip
								sm={1}
								md={2}
								lg={3}
								front={
									<>
										<i class="fad fa-mobile-android fa-4x mb-3"></i>
										<h4>Mobile App</h4>
									</>
								}
								className="mt-3 mt-md-0"
								back={
									<p>
										<i className="fad fa-quote-left mr-3"></i>
										Is a new app in your future? We'll work
										directly with you to establish your
										needs, help with design, and see
									</p>
								}
							/>
							<CardFlip
								sm={1}
								md={2}
								lg={3}
								front={
									<>
										<i class="fad fa-bags-shopping fa-4x mb-3"></i>
										<h4>Ecommerce</h4>
									</>
								}
								className="mt-3 mt-lg-0"
								back={<p></p>}
							/>
							<CardFlip
								sm={1}
								md={2}
								lg={3}
								front={
									<>
										<i class="fad fa-briefcase fa-4x mb-3"></i>
										<h4>Business Consultant</h4>
									</>
								}
								className="mt-3"
								back={<p></p>}
							/>
							<CardFlip
								sm={1}
								md={2}
								lg={3}
								front={
									<>
										<i class="fad fa-mail-bulk fa-4x mb-3"></i>
										<h4>Digital Marketing Service</h4>
									</>
								}
								className="mt-3"
								back={<p></p>}
							/>
							<CardFlip
								sm={1}
								md={2}
								lg={3}
								front={
									<>
										<i class="fad fa-edit fa-4x mb-3"></i>
										<h4>Web Design</h4>
									</>
								}
								className="mt-3"
								back={<p></p>}
							/>
						</Row>
					</Container>
				</Section>
			</main>
			<Footer />
		</>
	);
}
