import PropTypes from 'prop-types';

const ComboBox = ({ value, onChange }) => {
  const handleChange = event => {
    onChange(event.target.value);
  };

  return <input type="text" value={value} onChange={handleChange} />;
};

ComboBox.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default ComboBox;
