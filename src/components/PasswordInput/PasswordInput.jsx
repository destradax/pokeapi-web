import Input from 'components/Input';
import PropTypes from 'prop-types';
import styles from './PasswordInput.module.scss';

const PasswordInput = ({ label, value, onChange, required }) => {
  const handleChange = event => {
    onChange(event.target.value);
  };

  return (
    <label className={styles.passwordInput}>
      {label}
      <Input
        type="password"
        value={value}
        onChange={handleChange}
        required={required}
      />
    </label>
  );
};

PasswordInput.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  required: PropTypes.bool
};

export default PasswordInput;
