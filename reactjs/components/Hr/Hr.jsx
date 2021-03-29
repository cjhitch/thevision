import React from 'react';
import PropTypes from 'prop-types';
import styles from './Hr.module.scss';

const Hr = ({ variant, alignment, orientation }) => {
	return (
		<hr
			className={`${styles.Hr} ${styles[variant]} ${styles[alignment]} ${styles[orientation]}`}
		/>
	);
};

Hr.propTypes = {
	variant: PropTypes.string,
	alignment: PropTypes.oneOf(['left', 'center', 'right']),
	orientation: PropTypes.oneOf(['vertical', 'horizontal']),
};
Hr.defaultProps = {
	variant: '',
	alignment: 'left',
	orientation: 'horizontal',
};

export default Hr;
