import PropTypes from 'prop-types';
import styles from './Title.module.scss';

const Title = ({
	alignment,
	className,
	post,
	postClass,
	pre,
	preClass,
	Tag,
	title,
	titleClass,
}) => {
	return (
		<header className={`${styles.Title} ${className || ''}`}>
			<Tag
				className={`${styles.title} ${titleClass || ''} ${
					styles[alignment]
				}`}
			>
				{title}
			</Tag>
			{pre && (
				<h3
					className={`${styles.pre} ${preClass || ''} ${
						styles[alignment]
					} h6`}
				>
					{pre}
				</h3>
			)}
			{post && (
				<p
					className={`${styles.p} ${postClass || ''} ${
						styles[alignment]
					}`}
				>
					{post}
				</p>
			)}
		</header>
	);
};

Title.propTypes = {
	alignment: PropTypes.string,
	post: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
	postClass: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
	pre: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
	preClass: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
	Tag: PropTypes.string,
	title: PropTypes.string.isRequired,
	titleClass: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
};

Title.defaultProps = {
	alignment: 'center',
	post: false,
	postClass: false,
	pre: false,
	preClass: false,
	Tag: 'h2',
	titleClass: false,
};

export default Title;
