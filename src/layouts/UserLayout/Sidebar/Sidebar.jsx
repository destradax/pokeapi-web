import { useSession } from 'context/session';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const { user, logout } = useSession();

  return (
    <div>
      <nav>
        <ol>
          <li>
            <Link to="/pokemon">Home</Link>
          </li>
          <li>
            <Link to="/favorites">Favorites</Link>
          </li>
        </ol>
      </nav>
      user: {user.name}
      email: {user.email}
      <br />
      <button onClick={logout}>Log Out</button>
    </div>
  );
};

export default Sidebar;
