import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Products from '../components/Products';
import Portfolio from '../components/Portfolio';
import Reviews from '../components/Reviews';
import About from '../components/About';
import Contact from '../components/Contact';
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
				<meta
					name="msvalidate.01"
					content="738332EF71756F3D99AD679752D4108F"
				/>
				<link rel="icon" href="/favicon.ico" />
				<link
					rel="stylesheet"
					href="https://pro.fontawesome.com/releases/v5.15.3/css/all.css"
					integrity="sha384-iKbFRxucmOHIcpWdX9NTZ5WETOPm0Goy0WmfyNcl52qSYtc2Buk0NCe6jU1sWWNB"
					crossOrigin="anonymous"
				/>
				{/* <-- Global site tag (gtag.js) - Google Analytics --> */}
				<script
					async
					src="https://www.googletagmanager.com/gtag/js?id=G-2KNZDFKDW7"
				></script>
				<script
					dangerouslySetInnerHTML={{
						__html: `window.dataLayer = window.dataLayer || [];
				  function gtag(){dataLayer.push(arguments);}
				  gtag('js', new Date());
				
				  gtag('config', 'G-2KNZDFKDW7');`,
					}}
				/>
			</Head>
			<Header scroll={scroll} />
			<main>
				<Hero />
				<Products />
				<Portfolio />
				<Reviews />
				<About />
				<Contact />
			</main>
			<Footer />
		</>
	);
}
