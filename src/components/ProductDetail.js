import axios from "axios";
import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link, useHistory, Redirect } from "react-router-dom";
import "./ProductDetail.css";

export default function ProductDetail(props) {
  // Gets parameter from link
  const productId = props.match.params.productId;

  // Fetch product data
  const [data, setData] = useState({ user: {} });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const history = useHistory();

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

  const buttons = () => (
    <React.Fragment>
      <Link to={`/update/${productId}`} className="btn btn-primary">
        Edit Product
      </Link>
      <Button onClick={(e) => delProduct(e)}>Delete Product</Button>
    </React.Fragment>
  );

  const delProduct = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  useEffect(() => {
    if (isSubmitted) {
      axios.delete(`http://localhost:8080/api/product/${productId}`, {
        headers: {
          Authorization: `Bearer ${window.localStorage.getItem("token")}`,
        },
      });
      setIsSubmitted(false);
      history.push("/");
    }
  }, [isSubmitted]);

  const formattedPrice = parseInt(data.price).toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });

  const today = new Date();
  const announceDate = new Date(data.dateOfAnnounce);

  //calculate total number of seconds between two dates
  const totalSeconds = Math.abs(today - announceDate) / 1000;

  //calculate days difference by dividing total seconds in a day
  const daysDifference = Math.floor(totalSeconds / (60 * 60 * 24));

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
                src={
                  data.imageLink
                    ? `http://localhost:8080/api/product/${productId}/image/download`
                    : "/no-img.png"
                }
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

              <Card.Text style={{ fontSize: "1.25rem" }}>
                {data.dateOfAnnounce}
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">
                Last updated {daysDifference} days ago
              </small>
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

            <Link to={`/${data.user.id}/products`}>
              <span>More products from this user</span>
            </Link>
          </Card>
          {data.user.id == window.localStorage.getItem("userId")
            ? buttons()
            : console.log(
                `${data.user.id + window.localStorage.getItem("userId")}`
              )}
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
