import React from "react";
import { Link } from "react-router-dom";
import CartProduct from "../component/CartProduct";
import Summary from "../component/Summary";

const Cart = ({ cartProduct, addToCart, removeFromCart }) => {
  return (
    <div>
      {cartProduct.length > 0 ? (
        <div className="cart-flex">
          <div style={{ margin: "20px", flex: "0.5" }}>
            {cartProduct?.map((item) => (
              <CartProduct
                key={item.id}
                item={item}
                addToCart={addToCart}
                removeFromCart={removeFromCart}
              />
            ))}
          </div>
          <div style={{ flex: "0.5" }}>
            <Summary cartProduct={cartProduct} />
          </div>
        </div>
      ) : (
        <div
          style={{
            width: "500px",
            margin: "auto",
            marginTop: "10%",
            lineHeight: "100px",
            textAlign: "center",
            alignItems: "center",
          }}
        >
          <h1>Oops! Your cart is empty!</h1>
          <Link to="/">
            <button className="pay-now-btn">SHOP NOW</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
