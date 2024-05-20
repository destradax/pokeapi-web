import clsx from 'clsx';
import PropTypes from 'prop-types';
import styles from './Button.module.scss';

const Button = ({ children, type = 'button', onClick, disabled, variant }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={clsx(styles.button, styles[variant])}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  type: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  variant: PropTypes.string
};

export default Button;
