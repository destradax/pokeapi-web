import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import styles from './UserLayout.module.scss';

const UserLayout = () => {
  return (
    <div className={styles.layout}>
      <Sidebar />

      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default UserLayout;
