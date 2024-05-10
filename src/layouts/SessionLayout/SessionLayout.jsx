import { sessionContext } from 'context/session';
import useLocalStorage from 'hooks/useLocalStorage';
import { Outlet } from 'react-router-dom';

const SessionLayout = () => {
  const { value: user, setValue: setUser, clear } = useLocalStorage('user');

  const logout = () => {
    setUser(null);
    clear();
  };

  return (
    <sessionContext.Provider value={{ user, setUser, logout }}>
      <Outlet />
    </sessionContext.Provider>
  );
};

export default SessionLayout;
