import React, { createContext, FC, useState, useContext, useMemo, useEffect } from 'react';
import { useAuth0 } from "@auth0/auth0-react";

export const AuthenticationStateContext = createContext(null);

const AuthenticationProvider = ({ children }) => {
const { user, isAuthenticated, loginWithPopup, logout } = useAuth0();

  const value = useMemo(
    () => ({
      user,
      isAuthenticated,
      loginWithPopup,
      logout,
    }),
    [user, isAuthenticated, loginWithPopup, logout]
  );

  return <AuthenticationStateContext.Provider value={value}>{children}</AuthenticationStateContext.Provider>;
};

const useAuthenticationState = () => {
  const state = useContext(AuthenticationStateContext);

  if (!state) {
    throw new Error('useAuthenticationState must be used within a AuthenticationProvider');
  }

  return state;
};

export { useAuthenticationState };

export default AuthenticationProvider;