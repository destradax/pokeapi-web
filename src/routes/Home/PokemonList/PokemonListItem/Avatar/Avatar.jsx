import clsx from 'clsx';
import PropTypes from 'prop-types';
import styles from './Avatar.module.scss';

const Avatar = ({ url, className }) => {
  return url ? (
    <img src={url} className={clsx(styles.avatar, className)} />
  ) : (
    <div className={clsx(styles.avatar, styles.skeleton, className)} />
  );
};

Avatar.propTypes = {
  url: PropTypes.string,
  className: PropTypes.string
};

export default Avatar;
