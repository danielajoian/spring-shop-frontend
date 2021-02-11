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
      <Card className="col-auto mb-3" style={cardStyle}>
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
            <Card.Title style={titleStyle}>{p.title}</Card.Title>
          </Link>

          <Card.Text style={priceStyle}>${p.price}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    );
  });

  return (
    <div className="container" style={cardContainerStyle}>
      <div className="row">{productCards}</div>
    </div>
  );
}

const cardContainerStyle = {
  width: "80%",
  margin: "1rem auto",
};

const cardStyle = {
  minHeight: "100%",
  width: "30%",
  boxShadow: "-1px 1px 10px -6px rgba(0, 0, 0, 0.652)",
  margin: "10px",
};

const cardBodystyle = {
  minHeight: "5rem",
};

const cardImgStyle = {
  margin: "10px 0",
  objectFit: "cover",
  height: "250px",
};

const titleStyle = {
  fontSize: "1.5rem",
  fontWeight: "500",
  color: "#2F4858",
};

const priceStyle = {
  fontSize: "1.5rem",
  fontWeight: "300",
};

const imgContainerStyle = {
  display: "block",
};
