import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/Home.module.scss';

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
			<Header scroll={scroll} />
			<div className={styles.container}>
				<Head>
					<title>Create Next App</title>
					<link rel="icon" href="/favicon.ico" />
					<script
						src="https://kit.fontawesome.com/c61156b3af.js"
						crossOrigin="anonymous"
					/>
				</Head>

				<main className={styles.main}>
					<h1 className={styles.title}>
						Welcome to <a href="https://nextjs.org">Next.js!</a>
					</h1>

					<p className={styles.description}>
						Get started by editing{' '}
						<code className={styles.code}>pages/index.js</code>
					</p>

					<div className={styles.grid}>
						<a
							href="https://nextjs.org/docs"
							className={styles.card}
						>
							<h3>Documentation &rarr;</h3>
							<p>
								Find in-depth information about Next.js features
								and API.
							</p>
						</a>

						<a
							href="https://nextjs.org/learn"
							className={styles.card}
						>
							<h3>Learn &rarr;</h3>
							<p>
								Learn about Next.js in an interactive course
								with quizzes!
							</p>
						</a>

						<a
							href="https://github.com/vercel/next.js/tree/master/examples"
							className={styles.card}
						>
							<h3>Examples &rarr;</h3>
							<p>
								Discover and deploy boilerplate example Next.js
								projects.
							</p>
						</a>

						<a
							href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
							className={styles.card}
						>
							<h3>Deploy &rarr;</h3>
							<p>
								Instantly deploy your Next.js site to a public
								URL with Vercel.
							</p>
						</a>
					</div>
				</main>
			</div>
			<Footer />
		</>
	);
}
