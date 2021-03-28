import { Container } from 'react-bootstrap';
import styles from './Section.module.scss';

const Section = ({ children }) => {
	return (
		<Container as="section" className={styles.Section}>
			{children}
		</Container>
	);
};

export default Section;
