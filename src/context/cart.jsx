import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }){
  const [cart, setCart] = useState([]);
  const addToCart = product => {
    // check if the product is already in the cart
    const productInCart = cart.findIndex(item => item.id === product.id);
    console.log(productInCart)
    if(productInCart >= 0){
      const newCart = structuredClone(cart);
      newCart[productInCart].quantity += 1;
      setCart(newCart);
      return;
    }
    //producto no esta en el carrito
    setCart(prevState => ([
      ...prevState,
      {
        ...product,
        quantity:1
      }
    ]))
  }
  const clearCart = () => {
    setCart([])
  }

  const removeFromCart = product => {
    setCart(prevState => prevState.filter(item => item.id !== product.id))
  }

  return(
  <CartContext.Provider
  value={{ 
    cart, addToCart,clearCart, removeFromCart
  }}>
    {children}
  </CartContext.Provider>
  ) 
}