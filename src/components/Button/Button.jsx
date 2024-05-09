import PropTypes from 'prop-types';

const Button = ({ children, type = 'button', onClick }) => {
  return (
    <button type={type} onClick={onClick}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  type: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
