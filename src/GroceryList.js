import React from 'react';
import GroceryItem from './GroceryItem';

const GroceryList = ({ addToCart }) => {
  const groceryItems = [
    { id: 1, name: 'Apple', price: 1 },
    { id: 2, name: 'Banana', price: 0.5 },
    { id: 3, name: 'Carrot', price: 0.8 },
  ];

  return (
    <div className="grocery-list">
      <h2>Grocery Items</h2>
      {groceryItems.map(item => (
        <div key={item.id} className="grocery-list-item">
          <GroceryItem item={item} addToCart={addToCart} />
        </div>
      ))}
    </div>
  );
};

export default GroceryList;
