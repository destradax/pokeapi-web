import { createContext, useContext } from 'react';

export const sessionContext = createContext({
  user: null,
  setUser: () => {},
  logout: () => {}
});

export const useSession = () => useContext(sessionContext);
