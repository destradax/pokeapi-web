import PropTypes from 'prop-types';
import styles from './Button.module.scss';

const Button = ({ children, type = 'button', onClick }) => {
  return (
    <button type={type} onClick={onClick} className={styles.button}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  type: PropTypes.string,
  onClick: PropTypes.func
};

export default Button;
