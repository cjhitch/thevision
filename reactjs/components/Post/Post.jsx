import Head from 'next/head';
import { Container, Row, Image } from 'react-bootstrap';
import Title from '../Title';
import Hr from '../Hr';
import styles from './Post.module.scss';

const Post = ({
	meta,
	alignment,
	imgSrc,
	title,
	titleClass,
	pre,
	preClass,
	post,
	postClass,
	children,
}) => {
	return (
		<>
			<Head>
				<title>{`Visionary Creatives | ${title}`}</title>
				<meta
					http-equiv="Content-Type"
					content="text/html; charset=utf-8"
				/>
				<meta name="description" content={meta} />
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
			<Container
				className={styles.Hero}
				as="section"
				fluid
				style={{ backgroundImage: `url(${imgSrc})` }}
			>
				<Title
					className={styles.title}
					alignment={alignment || 'center'}
					title={title}
					titleClass={titleClass || 'text-white'}
					pre={pre || false}
					preClass={preClass || ''}
					post={post || false}
					postClass={postClass || ''}
				/>
				<Hr variant="secondary" alignment="center" />
			</Container>
			<Container fluid as="article" className={styles.Post}>
				<Container>
					<Row>
						<Image
							className="my-4"
							src="/chris.png"
							roundedCircle
						/>
						<p className="h4 pt-md-5 pl-md-3">
							Author: Christopher Hitchcock
							<br />
							<span className="h5">
								Date: March, 30<sup>th</sup> 2021
							</span>
						</p>
						{children}
					</Row>
				</Container>
			</Container>
		</>
	);
};

export default Post;
