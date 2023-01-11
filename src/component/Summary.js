import React from "react";
import { Link } from "react-router-dom";
import "./CartProduct.css";
const Summary = ({ cartProduct }) => {
  return (
    <div className="summary">
      <h1>Order Summary</h1>
      <h4>{cartProduct.length} Products</h4>
      <hr style={{ backgroundColor: "lightgray" }} />
      <div className="summary-total">
        <h2>Product total</h2>
        <h2>
          ₹{cartProduct.reduce((a, item) => a + item.qty * item.price, 0)}
        </h2>
      </div>
      <hr />
      <div className="summary-total">
        <h2>Delivery</h2>
        <h2>Free</h2>
      </div>
      <hr />
      <div className="summary-total">
        <h2>Total</h2>
        <h2>
          ₹{cartProduct.reduce((a, item) => a + item.qty * item.price, 0)}
        </h2>
      </div>
      <hr />
      <div>
        <button className="pay-now-btn">PAY NOW</button>
        <Link to="/">
          <button className="continue-btn">CONTINUE SHOPPING</button>
        </Link>
      </div>
    </div>
  );
};

export default Summary;
