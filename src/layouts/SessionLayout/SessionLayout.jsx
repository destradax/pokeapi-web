import { sessionContext } from 'context/session';
import useLocalStorage from 'hooks/useLocalStorage';
import { Outlet } from 'react-router-dom';

const SessionLayout = () => {
  const [user, setUser] = useLocalStorage('user');

  return (
    <sessionContext.Provider value={{ user, setUser }}>
      <Outlet />
    </sessionContext.Provider>
  );
};

export default SessionLayout;
