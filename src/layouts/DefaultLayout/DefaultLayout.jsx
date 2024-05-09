import { Outlet } from 'react-router-dom';
import styles from './DefaultLayout.module.scss';

const DefaultLayout = () => {
  return (
    <div className={styles.layout}>
      <Outlet />
    </div>
  );
};

export default DefaultLayout;
