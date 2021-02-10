import axios from "axios";
import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

export default function ProductDetail(props) {
  const productId = props.match.params.productId;
  const userId = props.match.params.userId;

  // Fetch product data
  const [data, setData] = useState({ product: {}, user: {} });

  useEffect(() => {
    const fetchData = async () => {
      const userRes = await axios(`http://localhost:8080/api/user/${userId}`);
      const productRes = await axios(
        `http://localhost:8080/api/product/${productId}`
      );

      setData({ product: productRes.data, user: userRes.data });
    };

    fetchData();
  }, []);

  console.log(data.product.imageLink);

  return (
    <Container style={containerStyle}>
      <Row>
        <Col>
          <Card>
            <div className="card-img-container">
              <Card.Img
                variant="top"
                src={data.product.imageLink}
                className="img-fluid"
              />
            </div>
            <Card.Body>
              <Card.Title>{data.product.title}</Card.Title>
              <Card.Text>${data.product.price}</Card.Text>
              <Card.Text>{data.product.description}</Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
        </Col>
        <Col md="4">
          <Card>
            <Card.Body>
              <Card.Title>{data.user.name}</Card.Title>

              <Card.Text>Email: {data.user.email}</Card.Text>
              <Card.Text>Phone: {data.user.phone}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

const containerStyle = {
  margin: "1rem auto",
  width: "80%",
};
