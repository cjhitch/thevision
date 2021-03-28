import { Container } from 'react-bootstrap';
import styles from './Section.module.scss';

const Section = ({ children, fluid, className, id }) => {
	return (
		<Container
			id={id || ''}
			as="section"
			fluid={fluid || false}
			className={`${styles.Section} ${className || ''}`}
		>
			{children}
		</Container>
	);
};

export default Section;
