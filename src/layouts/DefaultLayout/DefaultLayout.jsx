import { Navigate, Outlet } from 'react-router-dom';
import styles from './DefaultLayout.module.scss';
import { useSession } from 'context/session';

const DefaultLayout = () => {
  const { user } = useSession();

  if (user) {
    return <Navigate to="/pokemon" />;
  }

  return (
    <div className={styles.layout}>
      <Outlet />
    </div>
  );
};

export default DefaultLayout;
