import React from "react";
import { Link } from "react-router-dom";
import Shirt from "../../assets/shirt-solid.svg";
import Cart from "../../assets/cart-shopping-solid.svg";
import "./Header.css";
const Header = ({cartProduct}) => {
  return (
    <div className="header-div">
      <h2>TeeRex Store</h2>
      <div className="header-link-div">
        <Link to="/" className="page-link">
          <img src={Shirt} alt="Product" />
          <h3>Products</h3>
        </Link>
        <Link to="/cart" className="page-link">
          <img src={Cart} alt="Cart" />
          <h3>Cart</h3>
          {cartProduct.length>0 && <h3 style={{marginLeft:"10px"}}>: {cartProduct.reduce((a, item) => a + item.qty, 0)}</h3>}
          
        </Link>
      </div>
    </div>
  );
};

export default Header;
