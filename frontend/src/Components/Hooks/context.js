import { createContext, useContext, useState } from 'react';

const Authcontext = createContext();

const useAuthcontext = () => {
  return useContext(Authcontext);
};

const AuthProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(JSON.parse(localStorage.getItem('chat-user')) || null);

  return (
    <Authcontext.Provider value={{ authUser, setAuthUser }}>
      {children}
    </Authcontext.Provider>
  );
};

export { AuthProvider, Authcontext, useAuthcontext };

