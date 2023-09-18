import React, { useReducer } from 'react'
import {ADD_TO_CART,REMOVE_TO_CART} from '../types/CartReducerTypes'; '../types/CartReducerTypes';

const initiaCart = [];

const cartReducer =(state,payload)=>{
   const {type,data} = payload;

   switch (type) {
    case ADD_TO_CART:
        
        return [...state, ...data]
   
    default:
        break;
   }
}

const useCartReducer = () => {
  const [state, dispatch] = useReducer(first, second, third);
}

