import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Products from '../components/Products';
import Portfolio from '../components/Portfolio';
import About from '../components/About';
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
				<title>
					Visionary Creatives | Web | Apps | Digital Marketing |
					Design
				</title>
				<meta
					http-equiv="Content-Type"
					content="text/html; charset=utf-8"
				/>
				<meta
					name="description"
					content="Visionary Creatives is your premier stop for a new website, mobile app, web design and digital marketing services located in Las Vegas, Nevada"
				/>
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
				<Products />
				<Portfolio />
				<About />
			</main>
			<Footer />
		</>
	);
}
