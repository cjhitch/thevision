import PropTypes from 'prop-types';
import styles from './Title.module.scss';

const Title = ({ pre, preClass, title, titleClass, post, postClass, Tag }) => {
	return (
		<header className={styles.Title}>
			<Tag className={`${styles.title} ${titleClass || ''}`}>{title}</Tag>
			{pre && (
				<h3 className={`${styles.pre} ${preClass || ''}`}>{pre}</h3>
			)}
			{post && <p className={`${styles.p} ${postClass || ''}`}>{pre}</p>}
		</header>
	);
};

Title.propTypes = {
	pre: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
	preClass: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
	title: PropTypes.string.isRequired,
	titleClass: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
	post: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
	postClass: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
	Tag: PropTypes.string,
};

Title.defaultProps = {
	pre: false,
	preClass: false,
	titleClass: false,
	post: false,
	postClass: false,
	Tag: 'h2',
};

export default Title;
