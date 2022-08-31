import { useEffect, useContext, createContext, useState } from 'react';


const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [formUser, setFormUser] = useState({});
  const [paymentMethod, setPaymentMethod] = useState('payPal');
  // credit card state
  const [card, setCard] = useState({
    cvc: '',
    expiry: '',
    name: '',
    number: '',
  });


  useEffect(() => {
    const cartValue = window.localStorage.getItem("USER_CART");
    setCart(JSON.parse(cartValue));
  }, []);

  useEffect(() => {
    window.localStorage.setItem("USER_CART", JSON.stringify(cart));
  }, [cart]);


  // calculation
  const subTotal = Math.round(cart?.map((product) => product?.price).reduce((previousValue, currentValue) => previousValue + currentValue, 0));
  const taxes = Math.round((subTotal * 7.5) / 100);
  const netTotal = Math.round((subTotal + taxes));

  const value = { cart, setCart, subTotal, taxes, netTotal, formUser, setFormUser, card, setCard, paymentMethod, setPaymentMethod };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )
}

export const useCartContext = () => {
  return useContext(CartContext);
}