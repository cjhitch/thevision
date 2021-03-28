import React from 'react';
import Section from '../Section';
import CardFlip from '../CardFlip';
import Title from '../Title';
import { Container, Row } from 'react-bootstrap';

const Products = () => {
	return (
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
								If you need a new website, touch up, or major
								overhaul, we have over a decade of experience
								partnering with business owners like yourself.
								Our expertise in modern technologies helps
								ensure your site is modern and works as hard as
								you
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
								Is a new app in your future? We'll work directly
								with you to establish your needs, design and
								create, all the way through training and setup.
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
								Running a store can be complicated. On your site
								it shouldn't be. We'll work with you to set up
								products, variations, sales, and even coupons.
								We set up your ecommerce store so you can hit
								the ground running
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
								Sometimes all you need is direction. With years
								of expertise in the industry we can help with
								that. Whether you need a clear path to your
								goals, help with accessibility, or even SEO, Our
								knowledge can help provide clear path to your
								goals
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
								Pay per click, SEO, Social media marketing,
								email campaigns, if these sound confusing don't
								worry. Here at Visionary we take our industry
								proven techniques to help you get your greatest
								return on investment possible and drive your
								revenue.
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
								Whether your brand is existing or non-existent,
								you need logos, print design, email or layout,
								we've got you covered. Your design is your voice
								and the first thing your customers see. We will
								help set your voice to match and ensure
								everything looks as professional as you are.
							</p>
						}
					/>
				</Row>
			</Container>
		</Section>
	);
};

export default Products;
