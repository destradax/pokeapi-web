import clsx from 'clsx';
import PropTypes from 'prop-types';
import { forwardRef } from 'react';
import styles from './Input.module.scss';

const Input = forwardRef(({ className, ...props }, ref) => (
  <input {...props} className={clsx(styles.input, className)} ref={ref} />
));

Input.displayName = 'Input';

Input.propTypes = {
  className: PropTypes.string
};

export default Input;
