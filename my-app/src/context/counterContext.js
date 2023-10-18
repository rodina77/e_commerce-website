import React, { useState } from "react";
import { createContext } from "react";
export let Context = createContext();
export const ContextProvider = ({ children }) => {
    const [counter, setcounter] = useState(0);
 
    return (
        <Context.Provider value={{ counter, setcounter }}>
            {children}
        </Context.Provider>
    );
};