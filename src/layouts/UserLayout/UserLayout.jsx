import { FavoritesProvider } from 'context/favoritePokemon';
import { useSession } from 'context/session';
import { Navigate, Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import styles from './UserLayout.module.scss';

const UserLayout = () => {
  const { user } = useSession();

  if (!user) {
    return <Navigate to="/login" />;
  }

  return (
    <div className={styles.layout}>
      <Sidebar />

      <main>
        <FavoritesProvider>
          <Outlet />
        </FavoritesProvider>
      </main>
    </div>
  );
};

export default UserLayout;
