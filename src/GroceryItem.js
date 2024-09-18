import React from 'react';

const GroceryItem = ({ item, addToCart }) => {
  return (
    <>
      <span>{item.name} - ${item.price.toFixed(2)}</span>
      <button onClick={() => addToCart(item)}>Add to Cart</button>
    </>
  );
};

export default GroceryItem;
