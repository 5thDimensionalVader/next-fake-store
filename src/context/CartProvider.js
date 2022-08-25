import React from 'react';
import { useContext, createContext, useState } from 'react';


const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [formUser, setFormUser] = useState({});

  // calculation
  const subTotal = Math.round(cart?.map((product) => product?.price).reduce((previousValue, currentValue) => previousValue + currentValue, 0));
  const taxes = Math.round((subTotal * 7.5) / 100);
  const netTotal = Math.round((subTotal + taxes));

  const value = { cart, setCart, subTotal, taxes, netTotal, formUser, setFormUser };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )
}

export const useCartContext = () => {
  return useContext(CartContext);
}