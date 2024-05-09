import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div>
      <nav>
        <ol>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/favorites">Favorites</Link>
          </li>
          <li>
            <Link to="/login">Log Out</Link>
          </li>
        </ol>
      </nav>
    </div>
  );
};

export default Sidebar;
