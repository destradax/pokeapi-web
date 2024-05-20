import { login } from 'api/session';
import logoSrc from 'assets/logo.png';
import Button from 'components/Button';
import EmailInput from 'components/EmailInput';
import PasswordInput from 'components/PasswordInput';
import { useSession } from 'context/session';
import { useState } from 'react';
import styles from './Login.module.scss';

const Login = () => {
  const { setUser } = useSession();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async event => {
    event.preventDefault();

    if (loading) {
      return;
    }

    setLoading(true);
    try {
      const response = await login(email, password);
      const user = await response.json();
      setUser(user);
    } catch (error) {
      console.error(error);
      const message = error?.json
        ? await error.json()
        : 'An unexpected error occurred';
      setErrorMessage(message);
    } finally {
      setLoading(false);
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
      <img src={logoSrc} alt="logo" className={styles.logo} />

      <form onSubmit={handleSubmit} className={styles.form}>
        <EmailInput
          label="Email"
          value={email}
          onChange={handleChangeEmail}
          required
          autoFocus
        />

        <PasswordInput
          label="Password"
          value={password}
          onChange={handleChangePassword}
          required
        />

        <div className={styles.errorMessage}>{errorMessage}</div>

        <Button type="submit" disabled={loading} variant="primary">
          Log In
        </Button>
      </form>
    </div>
  );
};

export default Login;
