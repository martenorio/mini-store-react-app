import { createContext, useReducer, useState } from "react";
import { cartReducer, initialState } from "../reducer/cartReducer";
export const CartContext = createContext();

function useCartReducer(){
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addToCart = product => dispatch({
    type: "ADD_TO_CART",
    payload: product,
  })
  const removeFromCart = product => dispatch({
    type: "REMOVE_FROM_CART",
    payload: product,
  })
  const clearCart = () => dispatch({
    type: "CLEAR_CART"
  })
  return { state, addToCart, removeFromCart, clearCart}
}

export function CartProvider({ children }) {
  const {state, addToCart, removeFromCart, clearCart} = useCartReducer();

  return (
    <CartContext.Provider
      value={{
        cart: state, addToCart, clearCart, removeFromCart
      }}>
      {children}
    </CartContext.Provider>
  )
}