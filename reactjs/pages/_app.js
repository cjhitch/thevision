import SimpleReactLightbox from 'simple-react-lightbox';
import '../styles/globals.scss';

const MyApp = ({ Component, pageProps }) => {
	return (
		<SimpleReactLightbox>
			<Component {...pageProps} />
		</SimpleReactLightbox>
	);
};

export default MyApp;
