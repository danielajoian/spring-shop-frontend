import axios from "axios";
import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./ProductDetail.css";

export default function ProductDetail(props) {
  // Gets parameter from link
  const productId = props.match.params.productId;
  // const userId = props.match.params.userId;
  

  // Fetch product data
  const [data, setData] = useState({ user: {} });

  useEffect(() => {
    const fetchData = async () => {
  
      const productRes = await axios(
        `http://localhost:8080/api/product/${productId}`
      );

      setData(productRes.data);
    };

    fetchData();
  }, []);

  console.log(data);

  const editButton = () => <React.Fragment>
    <Link to={`/update/${productId}`} className="btn btn-primary">Edit Product</Link>
  </React.Fragment>;

  const formattedPrice = parseInt(data.price).toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });

  return (
    <Container style={containerStyle}>
      <Row></Row>
      <Row>
        <Col>
          <Card
            className="product-container"
            style={{ boxShadow: "-1px 1px 15px -6px rgba(0, 0, 0, 0.652)" }}
          >
            <div className="card-img-container">
              {/* <Card.Img
                variant="top"
                src={data.imageLink}
                className="img-fluid"
              /> */}
              <Card.Img 
                variant="top"
                src={data.imageLink ?
                      `http://localhost:8080/api/product/${productId}/image/download`
                      : '/no-img.png'}
                className="img-fluid"
              />
            </div>
            <Card.Body>
              <Card.Title style={{ fontSize: "2rem" }}>{data.title}</Card.Title>
              <Card.Text style={{ fontSize: "1.5rem" }}>
                {formattedPrice}
              </Card.Text>
              <hr />
              <Card.Text style={{ fontSize: "1.25rem" }}>
                {data.description}
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
        </Col>
        <Col md="4">
          <Card className="seller-container" style={sellerContainerStyle}>
            <span style={{ color: "white" }}>Seller info</span>

            <Card.Body>
              <Card.Title className="primary-text" style={sellerNameStyle}>
                {data.user.firstName + " " + data.user.lastName}
              </Card.Title>

              <Card.Text className="primary-text">
                E-mail:<br></br>
                <span style={{ color: "white" }} className="secondary-text">
                  {data.user.email}
                </span>
              </Card.Text>
              <Card.Text className="primary-text">
                Phone: <br></br>
                <span style={{ color: "white" }} className="secondary-text">
                  {data.user.phone}
                </span>
              </Card.Text>
            </Card.Body>
            <Link to={`/${data.user.id}/products`}><span>More products from this user</span></Link>
          </Card>
          {data.user.id == window.localStorage.getItem("userId") ? editButton() : console.log(`${data.user.id + window.localStorage.getItem("userId")}`)}
        </Col>
      </Row>
    </Container>
  );
}

const containerStyle = {
  margin: "1rem auto",
  width: "80%",
};

const sellerContainerStyle = {
  border: "3px solid white",
  borderRadius: "10px",
  backgroundColor: "#2F4858",
  color: "rgb(182, 251, 71)",
  boxShadow: "-1px 1px 15px -6px rgba(0, 0, 0, 0.652)",
  fontSize: "1.2em",
};

const sellerNameStyle = {
  color: "white",
  fontSize: "2rem",
};
