import React, { createContext, useState, useContext } from 'react';

const BundleContext = createContext();

export const useBundle = () => useContext(BundleContext);

export const BundleProvider = ({ children }) => {
  const [bundleToBuy, setBundleToBuy] = useState({});
  const [collectedEmail, setCollectedEmail] = useState('')
  

  const handleToBuyBundle = (bundle) => {
    setBundleToBuy(bundle);
    console.log(bundleToBuy)  };

  return (
    <BundleContext.Provider value={{ bundleToBuy, handleToBuyBundle, setBundleToBuy, collectedEmail, setCollectedEmail }}>
      {children}
    </BundleContext.Provider>
  );
};
