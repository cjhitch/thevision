import { Container, Row, Col } from 'react-bootstrap';
import './Post.module.scss';

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
			<Container fluid as="article">
				<Container
					as="section"
					fluid
					style={{ backgroundImage: url(imgSrc) }}
				>
					<Title
						alignment={alignment || 'center'}
						title={title}
						titleClass={titleClass || ''}
						pre={pre || false}
						preClass={preClass || ''}
						post={post || false}
						postClass={postClass || ''}
					/>
				</Container>
				<Container>
					<Row>{children}</Row>
				</Container>
			</Container>
		</>
	);
};

export default Post;
