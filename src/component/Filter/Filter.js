import React from "react";
import "./Filter.css";
import Slider from "@mui/material/Slider";
const colors = [
  "Black",
  "Blue",
  "Red",
  "Green",
  "Yellow",
  "Pink",
  "Grey",
  "Purple",
  "White",
];
const genders = ["Men", "Women"];
const types = ["Polo", "Hoodie", "Basic"];
const Filter = ({
  color,
  gender,
  type,
  price,
  setprice,
  ColorfilterHandler,
  GenderfilterHandler,
  TypefilterHandler,
}) => {
  return (
    <section className="filter">
      <div>
        <header id="filters-header">Color</header>

        <ul className="colors-list">
          {colors.map((colorr, index) => {
            return (
              <li key={index}>
                <div className="colors-list-item">
                  <div className="left-section">
                    <input
                      type="checkbox"
                      id={`custom-checkbox-${index}`}
                      name={colorr}
                      value={colorr}
                      onChange={ColorfilterHandler}
                    />
                    <label htmlFor={`custom-checkbox-${index}`}>{colorr}</label>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      <div>
        <header id="filters-header">Gender</header>
        <ul className="colors-list">
          {genders.map((gender, index) => {
            return (
              <li key={index}>
                <div className="colors-list-item">
                  <div className="left-section">
                    <input
                      type="checkbox"
                      id={`custom-checkbox-${index}`}
                      name={gender}
                      value={gender}
                      onChange={GenderfilterHandler}
                    />
                    <label htmlFor={`custom-checkbox-${index}`}>{gender}</label>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      <div>
        <header id="filters-header">Price</header>
        <div className="price-filter">
          <Slider
            min={0}
            max={500}
            aria-label="Default"
            valueLabelDisplay="auto"
            value={price}
            onChange={(e) => setprice(e.target.value)}
          />
        </div>
      </div>

      <div>
        <header id="filters-header">Type</header>
        <ul className="colors-list">
          {types.map((type, index) => {
            return (
              <li key={index}>
                <div className="colors-list-item">
                  <div className="left-section">
                    <input
                      type="checkbox"
                      id={`custom-checkbox-${index}`}
                      name={type}
                      value={type}
                      onChange={TypefilterHandler}
                    />
                    <label htmlFor={`custom-checkbox-${index}`}>{type}</label>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Filter;
