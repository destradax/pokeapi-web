import PropTypes from 'prop-types';
import styles from './DefaultLayout.module.scss';

const DefaultLayout = ({ children }) => {
  return <div className={styles.layout}>{children}</div>;
};

DefaultLayout.propTypes = {
  children: PropTypes.node
};

export default DefaultLayout;
