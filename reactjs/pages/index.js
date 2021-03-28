import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { Container, Row, Col } from 'react-bootstrap';
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
				<Section fluid className="bg-dark-0" id="products">
					<Title
						title="We Develop Digital Products That Help Grow Your Business"
						pre="Primary Product Offerings"
						preClass="text-primary"
						post="With years of experience and expertise in the industry, our products are tailor fit to provide all your digital needs"
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
										<i className="fad fa-mobile-android fa-4x mb-3"></i>
										<h4>Mobile App</h4>
									</>
								}
								className="mt-3 mt-md-0"
								back={
									<p>
										<i className="fad fa-quote-left mr-3"></i>
										Is a new app in your future? We'll work
										directly with you to establish your
										needs, design and create, all the way
										through training and setup.
									</p>
								}
							/>
							<CardFlip
								sm={1}
								md={2}
								lg={3}
								front={
									<>
										<i className="fad fa-bags-shopping fa-4x mb-3"></i>
										<h4>Ecommerce</h4>
									</>
								}
								className="mt-3 mt-lg-0"
								back={
									<p>
										<i className="fad fa-quote-left mr-3"></i>
										Running a store can be complicated. On
										your site it shouldn't be. We'll work
										with you to set up products, variations,
										sales, and even coupons. We set up your
										ecommerce store so you can hit the
										ground running
									</p>
								}
							/>
							<CardFlip
								sm={1}
								md={2}
								lg={3}
								front={
									<>
										<i className="fad fa-briefcase fa-4x mb-3"></i>
										<h4>Business Consultant</h4>
									</>
								}
								className="mt-3"
								back={
									<p>
										<i className="fad fa-quote-left mr-3"></i>
										Sometimes all you need is direction.
										With years of expertise in the industry
										we can help with that. Our knowledge
										will work hand in hand with your team to
										provide valuable insight, and a clear
										path to your goals
									</p>
								}
							/>
							<CardFlip
								sm={1}
								md={2}
								lg={3}
								front={
									<>
										<i className="fad fa-mail-bulk fa-4x mb-3"></i>
										<h4>Digital Marketing Service</h4>
									</>
								}
								className="mt-3"
								back={
									<p>
										<i className="fad fa-quote-left mr-3"></i>
										Pay per click, SEO, Social media
										marketing, email campaigns, if these
										sound confusing don't worry. Here at
										Visionary we take our industry proven
										techniques to help you get your greatest
										return on investment possible.
									</p>
								}
							/>
							<CardFlip
								sm={1}
								md={2}
								lg={3}
								front={
									<>
										<i className="fad fa-edit fa-4x mb-3"></i>
										<h4>Web Design</h4>
									</>
								}
								className="mt-3"
								back={
									<p>
										<i className="fad fa-quote-left mr-3"></i>
										Whether your brand is existing or
										non-existent, you need logos, print
										design, email or layout, we've got you
										covered. Your design is your voice and
										the first thing your customers see. We
										will help set your voice to match and
										ensure everything looks as professional
										as you are.
									</p>
								}
							/>
						</Row>
					</Container>
				</Section>
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
												Christopher started the company
												in 2011 after beginning a
												cleaning company. Finding a
												website was necessary he worked
												on learning that and quickly
												fell in love. Years later, he
												has helped hundreds of business
												owners establish their online
												presence and voice.
											</span>
											<br />
											<br />
											<span>
												With over a decade of experience
												in the web industry we have
												worked on hundreds of websites.
												Our expertise encompasses the
												full gammit. With many
												applications and websites
												including architected APIs and
												databases we have something for
												everyone. Utilizing modern
												technologies such as React and
												Vue, whether you need ecommerce,
												application development, web
												design, or a new website we've
												got you covered.
											</span>
										</>
									}
									postClass="text-dark-4"
								/>
							</Col>
						</Row>
					</Container>
				</Section>
			</main>
			<Footer />
		</>
	);
}
