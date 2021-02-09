import React, { useState, useEffect } from "react";
import { Card, CardColumns } from "react-bootstrap";
import axios from "axios";

export default function Products() {
  const [products, setProducts] = useState([]);
  const getProducts = () => {
    axios.get("http://localhost:8080/api").then((res) => setProducts(res.data));
  };

  useEffect(getProducts, []);

  console.log(products);

  const productCards = products.map((p) => {
    return (
      <Card style={cardStyle}>
        <div className="card-img-container" style={imgContainerStyle}>
          <Card.Img
            style={cardImgStyle}
            variant="top"
            src={p.imageLink}
            className="img-fluid"
          />
        </div>
        <Card.Body style={cardBodystyle}>
          <Card.Title>{p.title}</Card.Title>
          <Card.Text>{p.description}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    );
  });

  return <CardColumns style={cardDeckStyle}>{productCards}</CardColumns>;
}

const cardDeckStyle = {
  width: "80%",
  margin: "1rem auto",
};

const cardStyle = {
  minHeight: "100%",
};

const cardBodystyle = {
  minHeight: "10rem",
};

const cardImgStyle = {
  width: "auto",
  height: "auto",
  maxWidth: "400px",
  maxHeight: "15rem",
};

const imgContainerStyle = {};
