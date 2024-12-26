import React, { createContext, useState } from 'react';

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [culture, setCulture] = useState(null);

  return (
    <GlobalContext.Provider value={{ culture, setCulture }}>
      {children}
    </GlobalContext.Provider>
  );
};