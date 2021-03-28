import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Section from '../components/Section';
import Title from '../components/Title';
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
				</Section>
			</main>
			<Footer />
		</>
	);
}
