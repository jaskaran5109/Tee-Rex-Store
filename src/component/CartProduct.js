import React from "react";
import "./CartProduct.css";
const CartProduct = ({ item,addToCart,removeFromCart }) => {
  return (
    <div className="cart-product">
      <img src={item.imageURL} alt={item.id} className="cart-image" />
      <div>
        <h3>{item.name}</h3>
        <h3>₹{item.price}</h3>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          margin: "20px",
          alignItems: "center",
        }}
      >
        <button onClick={() => removeFromCart(item)} className="cart-button">
          -
        </button>
        <h3 style={{padding:"20px"}}>{item.qty}</h3>
        <button
          onClick={() => addToCart(item)}
          className="cart-button"
          disabled={item.qty + 1 > item.quantity}
        >
          +
        </button>
      </div>
      <div>
        <button type="button" style={{backgroundColor:"white",padding:"10px",margin:"20px",borderRadius:"5px"}}>DELETE</button>
      </div>
    </div>
  );
};

export default CartProduct;
