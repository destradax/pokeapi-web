import { login } from 'api/session';
import Button from 'components/Button';
import EmailInput from 'components/EmailInput';
import PasswordInput from 'components/PasswordInput';
import { useSession } from 'context/session';
import { useState } from 'react';
import styles from './Login.module.scss';

const Login = () => {
  const { setUser } = useSession();

  // TODO remove hardcoded data
  const [email, setEmail] = useState('admin@57blocks.io');
  const [password, setPassword] = useState('admin123*');
  const [errorMessage, setErrorMessage] = useState(null);

  const handleSubmit = async event => {
    event.preventDefault();

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
