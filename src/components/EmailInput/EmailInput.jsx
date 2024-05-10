import Input from 'components/Input';
import PropTypes from 'prop-types';
import styles from './EmailInput.module.scss';

const EmailInput = ({ label, value, onChange }) => {
  const handleChange = event => {
    onChange(event.target.value);
  };

  return (
    <label className={styles.emailInput}>
      {label}
      <Input type="email" value={value} onChange={handleChange} />
    </label>
  );
};

EmailInput.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default EmailInput;
