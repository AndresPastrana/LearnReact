import { useContext } from "react";
import GlobalContext from "../context/Contexts";

export function useCart() {
  // Read the Cart Context
  const cart_context = useContext(GlobalContext.CartContext);

  if (cart_context === undefined) {
    throw Error("Trying to read CartContext outside a CartProvider");
  }

  const { cart, add_to_cart, remove_from_cart, checkIfExist, getTotalToPay } =
    cart_context;

  return { cart, add_to_cart, remove_from_cart, checkIfExist ,getTotalToPay};
}
