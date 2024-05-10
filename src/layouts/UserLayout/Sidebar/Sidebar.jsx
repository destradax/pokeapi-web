import logoSrc from 'assets/logo.png';
import { useSession } from 'context/session';
import { NavLink } from 'react-router-dom';
import styles from './Sidebar.module.scss';

const Sidebar = () => {
  const { user, logout } = useSession();

  return (
    <div className={styles.sidebar}>
      <img src={logoSrc} alt="logo" className={styles.logo} />
      <nav>
        <ul className={styles.linkList}>
          <li>
            <NavLink to="/pokemon" className={styles.link}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/favorites" className={styles.link}>
              Favorites
            </NavLink>
          </li>
        </ul>
      </nav>

      <div className={styles.userInfo}>
        <div className={styles.avatar} />
        <span className={styles.userName}>{user.userName}</span>
        <span className={styles.email}>{user.email}</span>
        <button onClick={logout} className={styles.logout}>
          L
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
