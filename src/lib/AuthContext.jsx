import React, { createContext, useContext } from 'react';

const AuthContext = createContext();

// This portfolio has no auth-gated routes, so the provider stays local-only
// and never calls the Base44 backend. Kept as a stable shape for the unrouted
// Login/Register/ForgotPassword/ResetPassword pages and ProtectedRoute.
export const AuthProvider = ({ children }) => {
  const value = {
    user: null,
    isAuthenticated: false,
    isLoadingAuth: false,
    isLoadingPublicSettings: false,
    authError: null,
    appPublicSettings: null,
    authChecked: true,
    logout: () => {},
    navigateToLogin: () => {},
    checkUserAuth: async () => {},
    checkAppState: async () => {},
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
