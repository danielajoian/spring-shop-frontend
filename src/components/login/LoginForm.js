import React from "react";
import { Form, Col, Button } from "react-bootstrap";
import useLoginForm from "./UseLoginFrom";
import "../add-product-form/AddProduct.css";

export default function LoginFrom(props) {
  console.log(props);
  const { from } = props.location.state || { from: { pathname: "/" } };
  console.log(from);
  const { values, handleChange, handleSubmit, errors } = useLoginForm(from);

  return (
    <div className="form-container">
      <h1>Login</h1>
      {errors.message && <p>{errors.message}</p>}
      <Form className="main-form" onSubmit={handleSubmit}>
        <Form.Row>
          <Form.Group as={Col} controlId="email">
            <Form.Label className="form-label">Email</Form.Label>
            <Form.Control
              className="form-input"
              name="email"
              type="email"
              placeholder="Enter an email"
              value={values.email}
              onChange={handleChange}
            />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} controlId="password">
            <Form.Label className="form-label">Password</Form.Label>
            <Form.Control
              className="form-input"
              name="password"
              type="password"
              placeholder="Enter password"
              value={values.password}
              onChange={handleChange}
            />
          </Form.Group>
        </Form.Row>
        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
    </div>
  );
}
