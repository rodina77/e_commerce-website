import React, { useState } from "react";
import { createContext } from "react";
export let CartContext = createContext();
export const CartContextProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [showCart, setShowCart] = useState(false);
 
    return (
        <CartContext.Provider value={{ cartItems, setCartItems,showCart,setShowCart }}>
            {children}
        </CartContext.Provider>
    );
};