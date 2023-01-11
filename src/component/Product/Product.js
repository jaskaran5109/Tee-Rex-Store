import React  from "react";
import "./Product.css";
const Product = ({
  item,
  cartProduct,
  addToCart,
  removeFromCart,
  available,
}) => {
  return (
    <div className="product-card">
      <img src={item.imageURL} className="product-image" alt={item.name} />
      <div className="product-text">
        <div>
          <h4>{item.name}</h4>
          <h4>{`${item.gender}'s ${item.type}`}</h4>
        </div>
        <h4> ₹{item.price}</h4>
      </div>
      <div className="product-color">
        <span
          className="dot"
          style={{ backgroundColor: `${item.color}`, marginRight: "10px" }}
        ></span>
        <h4>{item.color}</h4>
      </div>
      
      {!cartProduct ? (
        <button className="product-button" onClick={() => addToCart(item)}>
          ADD TO CART
        </button>
      ) : (
        <>
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              margin: "20px",
              alignItems: "center",
            }}
          >
            <button
              onClick={() => removeFromCart(item)}
              className="cart-button"
            >
              -
            </button>
            <p>{cartProduct.qty}</p>
            <button
              onClick={() => addToCart(item)}
              className="cart-button"
              disabled={cartProduct.qty + 1 > cartProduct.quantity}
            >
              +
            </button>
          </div>
          {cartProduct.qty < cartProduct.quantity && (
            <h3 style={{ color: "gray" }}>{`Only ${
              cartProduct.quantity - cartProduct.qty
            } left in Stock`}</h3>
          )}
          {cartProduct.qty + 1 > cartProduct.quantity && (
            <h3 style={{ color: "red" }}>Out Of Stock</h3>
          )}
        </>
      )}
    </div>
  );
};

export default Product;
