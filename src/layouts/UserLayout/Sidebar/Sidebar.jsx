import avatarSrc from 'assets/avatar.png';
import logoSrc from 'assets/logo.png';
import IconButton from 'components/IconButton';
import { useSession } from 'context/session';
import { HeartIcon, HomeIcon, LogoutIcon } from 'icons';
import { NavLink } from 'react-router-dom';
import styles from './Sidebar.module.scss';

const Sidebar = () => {
  const { user, logout } = useSession();

  return (
    <div className={styles.sidebar}>
      <img src={logoSrc} alt="logo" className={styles.logo} />

      <hr className={styles.separator} />

      <nav>
        <ul className={styles.linkList}>
          <li>
            <NavLink to="/pokemon" className={styles.link}>
              <HomeIcon />
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/favorites" className={styles.link}>
              <HeartIcon />
              Favorites
            </NavLink>
          </li>
        </ul>
      </nav>

      <div className={styles.userInfo}>
        <img src={avatarSrc} className={styles.avatar} />
        <span className={styles.userName}>{user.userName}</span>
        <span className={styles.email}>{user.email}</span>
        <IconButton
          onClick={logout}
          aria-label="logout button"
          className={styles.logoutButton}
        >
          <LogoutIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default Sidebar;
