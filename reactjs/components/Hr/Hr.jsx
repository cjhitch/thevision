import React from 'react';
import PropTypes from 'prop-types';
import styles from './Hr.module.scss';

const Hr = ({ variant, alignment }) => {
	return (
		<hr
			className={`${styles.Hr} ${styles[variant]} ${styles[alignment]}`}
		/>
	);
};

Hr.propTypes = {
	variant: PropTypes.string,
	alignment: PropTypes.oneOf(['left', 'center', 'right']),
};
Hr.defaultProps = {
	variant: '',
	alignment: 'left',
};

export default Hr;
