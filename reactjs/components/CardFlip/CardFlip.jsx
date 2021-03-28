import { useRef, useEffect, useState } from 'react';
import { Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import styles from './CardFlip.module.scss';

const CardFlip = ({ xs, sm, md, lg, xl, front, back, className }) => {
	const [height, setHeight] = useState();
	const [flipped, setFlipped] = useState(false);
	const ref = useRef();
	const calcCols = (num) => {
		return 12 / num;
	};

	useEffect(() => {
		if (ref.current) {
			setHeight(ref.current.clientWidth * 0.8);
		}
	}, [ref]);

	return (
		<Col
			as="article"
			className={`${styles.CardFlip || ''} ${className || ''} ${
				flipped ? styles.flipped : ''
			}`}
			xs={xs && calcCols(xs)}
			sm={sm && calcCols(sm)}
			md={md && calcCols(md)}
			lg={lg && calcCols(lg)}
			xl={xl && calcCols(xl)}
			style={{ height: height }}
			ref={ref}
			onClick={() => setFlipped(!flipped)}
		>
			<div className={styles.flipWrap} style={{ height: height }}>
				<div className={styles.front}>
					<i className={`${styles.flip} fad fa-share fa-sm`}></i>
					{front}
				</div>
				<div className={styles.back}>
					<i className={`${styles.flip} fad fa-share fa-sm`}></i>
					{back}
				</div>
			</div>
		</Col>
	);
};

CardFlip.propTypes = {
	xs: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
	sm: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
	md: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
	lg: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
	xl: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
};

CardFlip.defaultProps = {
	xs: false,
	sm: false,
	md: false,
	lg: false,
	xl: false,
};

export default CardFlip;
