import clsx from 'clsx';
import PropTypes from 'prop-types';
import styles from './IconButton.module.scss';

const IconButton = ({
  type = 'button',
  onClick,
  className,
  'aria-label': ariaLabel,
  children
}) => {
  return (
    <button
      className={clsx(styles.iconButton, className)}
      type={type}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      <span className={styles.iconContainer}>{children}</span>
    </button>
  );
};

IconButton.propTypes = {
  type: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
  'aria-label': PropTypes.string,
  children: PropTypes.node
};

export default IconButton;
