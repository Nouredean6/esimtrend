import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
//   const [bundleToBuy, setBundleToBuy] = useState({});
//   const [collectedEmail, setCollectedEmail] = useState('')
const [isLoggedIn, setIsLoggedIn] = useState(false);
const [user, setUser] = useState(null);
  

//   const handleToBuyBundle = (bundle) => {
//     setBundleToBuy(bundle);
//     console.log(bundleToBuy)  };

  return (
    <AuthContext.Provider value={{isLoggedIn, setIsLoggedIn, user, setUser  }}>
      {children}
    </AuthContext.Provider>
  );
};
