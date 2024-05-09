import PropTypes from 'prop-types';
import Sidebar from './Sidebar';
import styles from './UserLayout.module.scss';

const UserLayout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Sidebar />

      <main>{children}</main>
    </div>
  );
};

UserLayout.propTypes = {
  children: PropTypes.node
};

export default UserLayout;
