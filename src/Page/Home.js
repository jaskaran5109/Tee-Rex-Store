import React, { useEffect, useState } from "react";
import useWindowDimensions from "../config";
import Product from "../component/Product/Product";
import Filter from "../component/Filter/Filter";
import SearchIcon from "../assets/search.svg";
import Modal from "@mui/material/Modal";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Home = ({
  cartProduct,
  addToCart,
  removeFromCart,
  filteredProducts,
  search,
  setSearch,
  available,
}) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const {  width } = useWindowDimensions();
  const [color, setcolor] = useState([]);
  const [gender, setgender] = useState([]);
  const [type, settype] = useState([]);
  const [price, setprice] = useState(500);

  const GenderfilterHandler = (event) => {
    if (event.target.checked) {
      setgender([...gender, event.target.value]);
    } else {
      setgender(gender.filter((filterTag) => filterTag !== event.target.value));
    }
    setSearch("");
  };

  const TypefilterHandler = (event) => {
    if (event.target.checked) {
      settype([...type, event.target.value]);
    } else {
      settype(type.filter((filterTag) => filterTag !== event.target.value));
    }
    setSearch("");
  };

  const ColorfilterHandler = (event) => {
    if (event.target.checked) {
      setcolor([...color, event.target.value]);
    } else {
      setcolor(color.filter((filterTag) => filterTag !== event.target.value));
    }
    setSearch("");
    // color.length > 0 && color.forEach((colorTag) => console.log(colorTag));
  };
  const handleSearhChange = (event) => {
    setSearch(event.target.value);
    setcolor([]);
  };
  filteredProducts =
    color.length > 0
      ? color.flatMap((colorTag) =>
          filteredProducts.filter((node) => {
            if (node.color.includes(colorTag)) return node;
          })
        )
      : filteredProducts;

  filteredProducts =
    gender.length > 0
      ? gender.flatMap((colorTag) =>
          filteredProducts.filter((node) => {
            if (node.gender.includes(colorTag)) return node;
          })
        )
      : filteredProducts;

  filteredProducts =
    type.length > 0
      ? type.flatMap((colorTag) =>
          filteredProducts.filter((node) => {
            if (node.type.includes(colorTag)) return node;
          })
        )
      : filteredProducts;

  filteredProducts =
    price > 0
      ? filteredProducts.filter((node) => {
          if (node.price <= price) return node;
        })
      : filteredProducts;

  return (
    <div style={{ backgroundColor: "aliceblue", display: "flex" }}>
      {width >= 700 && (
        <div style={{ flex: "0.3" }}>
          <Filter
            color={color}
            gender={gender}
            type={type}
            settype={settype}
            price={price}
            setprice={setprice}
            ColorfilterHandler={ColorfilterHandler}
            GenderfilterHandler={GenderfilterHandler}
            TypefilterHandler={TypefilterHandler}
          />
        </div>
      )}

      <div style={{ flex: `${width >= 700 ? 0.7 : 1}` }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <input
            placeholder="Search for products..."
            type="text"
            value={search}
            onChange={handleSearhChange}
            style={{
              padding: "10px",
              marginTop: "20px",
              marginLeft: "20px",
              width: "70%",
              backgroundColor: "transparent",
              border: "none",
              borderBottom: "1px solid black",
            }}
          />
          <img
            src={SearchIcon}
            alt="Search"
            style={{ width: "20px", height: "20px", paddingTop: "20px" }}
          />
          {width<700 && <button onClick={handleOpen} style={{padding:"10px",marginLeft:'10px',backgroundColor:"black",color:"white"}}>FILTER</button>}
        </div>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {filteredProducts.length > 0 ? (
            filteredProducts.map((item) => (
              <Product
                key={item.id}
                item={item}
                cartProduct={cartProduct.find((x) => x.id === item.id)}
                addToCart={addToCart}
                removeFromCart={removeFromCart}
                available={available}
              />
            ))
          ) : (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                textAlign: "center",
                marginLeft: "auto",
                marginRight: "auto",
                marginTop: "1 0%",
              }}
            >
              <h2>No Product Found</h2>
              <h4>Search / filter did not match any product.</h4>
              <h4>Please try again</h4>
            </div>
          )}
        </div>
      </div>
      <Modal open={open} onClose={handleClose}>
        <Filter
          color={color}
          gender={gender}
          type={type}
          settype={settype}
          price={price}
          setprice={setprice}
          ColorfilterHandler={ColorfilterHandler}
          GenderfilterHandler={GenderfilterHandler}
          TypefilterHandler={TypefilterHandler}
        />
      </Modal>
    </div>
  );
};

export default Home;
