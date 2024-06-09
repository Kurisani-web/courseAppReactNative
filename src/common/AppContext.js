const {createContext, useState} = require('react');

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {

  const login = () => {};

  const register = () => {};

  const logout = () => {};

  return (
    <AuthContext.Provider value={{login, register, logout}}>
      {children}
    </AuthContext.Provider>
  );
};
