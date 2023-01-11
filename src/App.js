import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Page/Home";
import Cart from "./Page/Cart";
import Header from "./component/Header/Header";
import { useEffect, useState } from "react";
import axios from "axios";
function App() {
  const [data, setData] = useState([]);
  const [cartProduct, setCartProduct] = useState([]);
  const [search, setSearch] = useState("");
  const [available, setAvailable] = useState(true);
  let filteredProducts = data.filter((product) => {
    if (
      product.name.toLowerCase().includes(search) ||
      product.type.toLowerCase().includes(search) ||
      product.gender.toLowerCase().includes(search)
    ) {
      return product;
    }
  });
  const addToCart = (product) => {
    const exist = cartProduct.find((x) => x.id === product.id);
    if (exist) {
      const newCartItems = cartProduct.map((x) =>
        x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
      );
      setCartProduct(newCartItems);
    } else setCartProduct([...cartProduct, { ...product, qty: 1 }]);

    filteredProducts.map((x) => {
      cartProduct.map((item) => {
        if (x.quantity + 1 < item.qty) {
          setAvailable(false);
        }
      });
    });
  };

  const removeFromCart = (product) => {
    const exist = cartProduct.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      const newCartItems = cartProduct.filter((x) => x.id !== product.id);
      setCartProduct(newCartItems);
    } else {
      const newCartItems = cartProduct.map((x) =>
        x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
      );
      setCartProduct(newCartItems);
    }
  };
  const getData = async () => {
    const { data } = await axios.get(
      "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json"
    );
    setData(data);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <Router>
      <Header cartProduct={cartProduct}/>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Home
              available={available}
              filteredProducts={filteredProducts}
              search={search}
              setSearch={setSearch}
              cartProduct={cartProduct}
              addToCart={addToCart}
              removeFromCart={removeFromCart}
            />
          }
        />
        <Route
          exact
          path="/cart"
          element={
            <Cart
              cartProduct={cartProduct}
              addToCart={addToCart}
              removeFromCart={removeFromCart}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
