import { ReactNode, createContext, useEffect, useReducer, useState } from "react";

import { productList } from "../data/products"; 
import { Order, ShoppingCart, ShoppingCartItem, shoppingReducer } from "../reducers/shopping";

interface ShoppingContextType {
  shoppingCart: ShoppingCart;
  addProduct: (productId: string, amount: number) => void;
  removeProduct: (itemId: string) => void;
  addItemAtCart: (itemid: string) => void;
  removeItemAtCart: (itemid: string) => void;
  orders: Order[];
  createNewOrder: (order: Order) => void;
}

export const ShoppingContext = createContext({} as ShoppingContextType);

interface ShoppingContextProviderProps {
  children: ReactNode;
}

export function ShoppingContextProvider({ children }: ShoppingContextProviderProps) {
  const [shoppingState, dispatch] = useReducer(shoppingReducer, { 
    cart: [],
    orders: []
   }, (initialState) => {
    const shoppingStateInJSON = localStorage.getItem('@delivery-coffee:shopping-state-v1.0.0');

    if (shoppingStateInJSON) {
      return JSON.parse(shoppingStateInJSON);
    }

    return initialState;
  });

  useEffect(() => {
    const shoppingStateInJSON = JSON.stringify(shoppingState);

    localStorage.setItem('@delivery-coffee:shopping-state-v1.0.0', shoppingStateInJSON);
  }, [shoppingState]);

  const shoppingCart: ShoppingCart = {
    items: shoppingState.cart
  };
  const orders = shoppingState.orders;

  function addProduct(productId: string, amount: number) {
    const product = productList.find(p => p.id === productId);

    if (product) {
      const id = String(new Date().getTime());

      const item: ShoppingCartItem = {
        id,
        product,
        amount
      }

      dispatch({
        type: 'ADD_ITEM_ON_CART',
        payload: {
          item
        }
      });
    }
  }

  function removeProduct(itemId: string) {
    dispatch({
      type: 'REMOVE_ITEM_ON_CART',
      payload: {
        id: itemId
      }
    });
  }

  function addItemAtCart(itemId: string){ 
    dispatch({
      type: 'PLUS_ITEM_ON_CART',
      payload: {
        id: itemId
      }
    });
  }

  function removeItemAtCart(itemId: string) {
    dispatch({
      type: 'MINUS_ITEM_ON_CART',
      payload: {
        id: itemId
      }
    });
  }

  function createNewOrder(order: Order) {
    dispatch({
      type: 'CREATE_NEW_ORDER',
      payload: {
        order
      }
    });
  }
  
  return (
    <ShoppingContext.Provider value={{ shoppingCart, addProduct, removeProduct, addItemAtCart, removeItemAtCart, orders, createNewOrder }}>
      { children }
    </ShoppingContext.Provider>
  );
}