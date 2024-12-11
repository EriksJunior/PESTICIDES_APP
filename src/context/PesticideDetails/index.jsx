import { createContext } from "react";
import { useState } from "react";

const PesticideDetailsContext = createContext({});

function PesticideDetailsProvider({ children }) {
  const [problemIsOpen, setProblemIsOpen] = useState(false);

  const toggle = () => {
    setProblemIsOpen((state) => !state);
  };

  return (
    <PesticideDetailsContext.Provider
      value={{ problemIsOpen, toggle }}
    >
      {children}
    </PesticideDetailsContext.Provider>
  );
}

export { PesticideDetailsProvider, PesticideDetailsContext };
