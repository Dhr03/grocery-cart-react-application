import React, { useState } from 'react';
import GroceryList from './GroceryList';
import Cart from './Cart';
import './App.css';


const App = () => {
  const [cartItems, setCartItems] = useState([]);
  
  const addToCart = (item) => {
    setCartItems((prevItems) => {
      const itemExists = prevItems.find(cartItem => cartItem.id === item.id);
      if (itemExists) {
        return prevItems.map(cartItem => 
          cartItem.id === item.id 
            ? { ...cartItem, quantity: cartItem.quantity + 1 } 
            : cartItem
        );
      }
      return [...prevItems, { ...item, quantity: 1 }];
    });
  };

  return (
    <div className="App">
      <h1>Grocery Shopping Cart</h1>
      <GroceryList addToCart={addToCart} />
      <Cart cartItems={cartItems} />
    </div>
  );
};

export default App;
