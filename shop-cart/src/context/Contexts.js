// All app context here
import { createContext } from "react";

 const FilterContext = createContext();
  const ProductContext = createContext();
  const CartContext = createContext();


const GlobalContext = { FilterContext,ProductContext,CartContext};

export default GlobalContext