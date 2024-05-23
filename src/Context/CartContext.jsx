import { useState } from "react";
import { CartContext } from "../hooks/useCart";

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
    const addCart = (item) => {
      
    return setCart([item, ...cart]);
  };

  const updateCart = () => {};

  const removeCart = (productsId) => {
    const updatedCartItems = cart.filter((e) => {
      return e.id !== productsId;
    });
    return setCart(updatedCartItems);
  };

  const clearCart = () => {
    return setCart([]);
  };

  return (
    <>
      <CartContext.Provider
        value={{ cart, addCart, removeCart, updateCart, clearCart }}
      >
        {children}
      </CartContext.Provider>
    </>
  );
};

export default CartProvider;
