import { createContext, useContext } from 'react';

export const sessionContext = createContext({});

export const useSession = () => useContext(sessionContext);
