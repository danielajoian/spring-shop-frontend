import React, { useState, useEffect } from "react";
import { Card, CardColumns } from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Products() {
  const [products, setProducts] = useState([]);
  const getProducts = () => {
    axios
      .get("http://localhost:8080/api/product/")
      .then((res) => setProducts(res.data));
  };

  useEffect(getProducts, []);

  console.log(products);

  const productCards = products.map((p) => {
    const newLinkTo = {
      pathname: `/product/${p.id}/${p.userId}`,
      productId: p.id,
      userId: p.userId,
    };

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
          <Link to={newLinkTo}>
            <Card.Title>{p.title}</Card.Title>
          </Link>

          <Card.Text>${p.price}</Card.Text>
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
