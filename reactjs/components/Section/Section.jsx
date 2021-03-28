import { Container } from 'react-bootstrap';
import styles from './Section.module.scss';

const Section = ({ children, fluid }) => {
	return (
		<Container
			as="section"
			fluid={fluid || false}
			className={styles.Section}
		>
			{children}
		</Container>
	);
};

export default Section;
