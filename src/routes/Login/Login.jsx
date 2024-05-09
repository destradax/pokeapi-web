import { login } from 'api/session';
import Button from 'components/Button';
import EmailInput from 'components/EmailInput';
import PasswordInput from 'components/PasswordInput';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Login.module.scss';

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);

  const handleSubmit = async event => {
    event.preventDefault();

    try {
      await login(email, password);
      navigate('/home');
    } catch (error) {
      setErrorMessage(await error.json());
    }
  };

  const handleChangeEmail = newEmail => {
    setErrorMessage(null);
    setEmail(newEmail);
  };

  const handleChangePassword = newPassword => {
    setErrorMessage(null);
    setPassword(newPassword);
  };

  return (
    <div className={styles.login}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <EmailInput label="Email" value={email} onChange={handleChangeEmail} />

        <PasswordInput
          label="Password"
          value={password}
          onChange={handleChangePassword}
        />

        {errorMessage && (
          <div className={styles.errorMessage}>{errorMessage}</div>
        )}

        <Button type="submit">Log In</Button>
      </form>
    </div>
  );
};

export default Login;
