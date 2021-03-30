import Head from 'next/head';
import { Button } from 'react-bootstrap';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/Four.module.scss';

export default function Custom404() {
	return (
		<div className={styles.container}>
			<Head className={styles.head}>
				<title>Visionary Creatives | Privacy Policy</title>
				<meta
					http-equiv="Content-Type"
					content="text/html; charset=utf-8"
				/>
				<meta
					name="description"
					content="Visionary Creatives privacy policy page. Find out what information we collect, and how to ask questions."
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
			<Header />
			<main className={styles.main}>
				<h1>Uh Oh - something happened, this page cannot be found</h1>
				<Button
					className="mx-auto d-block mt-5"
					href="/"
					variant="secondary"
				>
					Back Home
				</Button>
			</main>
			<Footer className={styles.foot} />
		</div>
	);
}
