import React from 'react';

const Cart = ({ cartItems }) => {
  const totalCost = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cartItems.map(item => (
            <li key={item.id} className="cart-item">
              <span>{item.name} - {item.quantity} x ${item.price.toFixed(2)}</span>
              <span>${(item.price * item.quantity).toFixed(2)}</span>
            </li>
          ))}
        </ul>
      )}
      <h3 className="total">Total Cost: ${totalCost.toFixed(2)}</h3>
    </div>
  );
};

export default Cart;
