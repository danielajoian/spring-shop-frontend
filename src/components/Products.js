import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductCards from "./ProductCards";
import { Link } from "react-router-dom";
import SearchBox from "./SearchBox";

export default function Products() {
  const [products, setProducts] = useState([]);
  const getProducts = () => {
    axios
      .get("http://localhost:8080/api/product/")
      .then((res) => setProducts(res.data));
  };

  useEffect(getProducts, []);

  return (
    <div className="container" style={cardContainerStyle}>
        <SearchBox />

      <div className="row">
        <ProductCards products={products} />
      </div>
      
    </div>
  );
}

const cardContainerStyle = {
  width: "80%",
  margin: "1rem auto",
};
