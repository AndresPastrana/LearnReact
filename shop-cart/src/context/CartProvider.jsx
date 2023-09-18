import { useReducer, useState } from "react";
import GlobalContext from "./Contexts";

const cart_initial = [];

const cart_reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "ADD_TO_CART":
      // TODO: Buscar si el producto existe
      const product_index = state.findIndex((item) => item.id === payload.id);

      // Si existe , aumento en 1 la cantidad
      if (product_index >= 0) {
        const new_cart = structuredClone(state);

        new_cart[product_index] = {
          ...payload,
          quantity: payload.quantity + 1,
        };
        return new_cart;
      }

      const newProduct = { ...payload, quantity: 1 };

      return [...state, { ...newProduct }];

    case "REMOVE_FROM_CART":
      return state.filter((item) => item.id !== payload.id);

    default:
      break;
  }
};

const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cart_reducer, cart_initial);

  const add_to_cart = (product) =>
    dispatch({ type: "ADD_TO_CART", payload: product });

  const remove_from_cart = (prodcut) =>
    dispatch({ type: "REMOVE_FROM_CART", payload: prodcut });

  const getTotalToPay = () => {
    const total = cart.reduce((acm, currentValue) => {
      const { price, quantity } = currentValue;

      return (acm += price * quantity);
    }, 0);
    return total;
  };

  const checkIfExist = (product) => {
    return cart.findIndex((item) => item.id === product.id);
  };

  return (
    <GlobalContext.CartContext.Provider
      value={{
        cart,
        add_to_cart,
        remove_from_cart,
        checkIfExist,
        getTotalToPay,
      }}
    >
      {children}
    </GlobalContext.CartContext.Provider>
  );
};

export default CartProvider;
