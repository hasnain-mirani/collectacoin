import { createContext, useState } from "react";

export const ContextValues = createContext<any>(null);

function Context({ children }:any) {
    const [searchVal, setSearchVal] = useState();
  
    return (
      <ContextValues.Provider value={{ searchVal, setSearchVal}}>
        {children}
      </ContextValues.Provider>
    );
  }
  export default Context;