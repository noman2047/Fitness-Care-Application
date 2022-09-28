import React from 'react';

const Cart = (props) => {
  return (
    <div>
       <h3>This Order Summary</h3>
      <p>Total Product You Want to Buy: {props.cart}</p>
    </div>
  );
};

export default Cart;