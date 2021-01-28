/* eslint-disable */ 
import React, { useState, createContext } from 'react';

// Create Context Object
export const CartContext = createContext();

// Create a provider for components to consume and subscribe to changes
export const CartContextProvider = (props) => {
    const [cards, setCards] = useState([]);

  return (
    <CounterContext.Provider value={[cards, setCards]}>
      {props.children}
    </CounterContext.Provider>
  );
};
