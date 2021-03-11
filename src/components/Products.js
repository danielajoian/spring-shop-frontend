import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductCards from "./ProductCards";
import { Link } from "react-router-dom";
import SearchBox from "./SearchBox";
import { Form, Button } from "react-bootstrap";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [displayedProducts, setDisplayedProducts] = useState([]);

  const token = `Bearer ${window.localStorage.getItem("token")}`;
  const [filters, setFilters] = useState({
    category: "",
    sorting: "",
  });

  console.log(filters);

  const getProducts = () => {
    axios
      .get("http://localhost:8080/api/product/", {
        headers: { Authorization: token },
      })
      .then((res) => {
        setProducts(res.data);
        setDisplayedProducts(res.data);
      });
    console.log("am luat produsele");
  };

  const getSorting = (sortString) => {
    switch (sortString) {
      case "Price":
        return (a, b) => a.price - b.price;
      case "Name":
        return (a, b) =>
          a.title.toLowerCase().localeCompare(b.title.toLowerCase());
      case "New":
        return (a, b) => b.dateOfAnnounce - a.dateOfAnnounce;

      default:
        return (a, b) => a.dateOfAnnounce - b.dateOfAnnounce;
    }
  };

  const filterProducts = () => {
    let filteredProducts = products;

    if (filters.category) {
      filteredProducts = filteredProducts.filter(
        (product) => product.category === filters.category
      );
    }

    if (filters.sorting) {
      filteredProducts = [...filteredProducts].sort(
        getSorting(filters.sorting)
      );
    }

    setDisplayedProducts(filteredProducts);
  };

  useEffect(getProducts, []);
  useEffect(filterProducts, [filters]);

  return (
    <div className="container" style={cardContainerStyle}>
      <SearchBox />

      <Form inline>
        <Form.Label className="my-1 mr-2" htmlFor="category">
          Category:
        </Form.Label>
        <Form.Control
          as="select"
          className="my-1 mr-sm-2"
          id="category"
          custom
          onChange={(e) => {
            setFilters({ ...filters, category: e.target.value });
          }}
        >
          <option value="">Choose...</option>
          <option value="ELECTRONICS">Electronics</option>
          <option value="SPORTS">Sports</option>
          <option value="HOUSEHOLD">Household</option>
          <option value="ESTATE">Real Estate</option>
        </Form.Control>

        <Form.Label className="my-1 mr-2" htmlFor="sort">
          Sort by:
        </Form.Label>
        <Form.Control
          as="select"
          className="my-1 mr-sm-2"
          id="sort"
          custom
          onChange={(e) => {
            setFilters({ ...filters, sorting: e.target.value });
          }}
        >
          <option value="">Date (oldest first)</option>
          <option value="New">Date (newest first)</option>
          <option value="Price">Price</option>
          <option value="Name">Name</option>
        </Form.Control>
      </Form>

      <div className="row">
        <ProductCards products={displayedProducts} />
      </div>
    </div>
  );
}

const cardContainerStyle = {
  width: "80%",
  margin: "1rem auto",
};
