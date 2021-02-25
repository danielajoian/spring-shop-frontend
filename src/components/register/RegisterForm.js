import React from "react";
import { Form, Col, Button } from "react-bootstrap";
import useRegisterForm from "./UseRegisterForm";
import validate from "./RegisterValidation"
import "../add-product-form/AddProduct.css"

export default function RegisterFrom() {
  const { values, handleChange, handleSubmit, errors } = useRegisterForm(validate);

  return (
    <div className="form-container">
      <h1>Register an account</h1>
      <Form className="main-form" onSubmit={handleSubmit}>
        <Form.Row>
          <Form.Group as={Col} controlId="firstName">
            <Form.Label className="form-label">First Name</Form.Label>
            <Form.Control
              className="form-input"
              name="firstName"
              placeholder="Enter first name"
              value={values.firstName}
              onChange={handleChange}
            />
            {errors.firstName && <p>{errors.firstName}</p>}
          </Form.Group>

          <Form.Group as={Col} controlId="lastName">
            <Form.Label className="form-label">Last Name</Form.Label>
            <Form.Control
              className="form-input"
              name="lastName"
              placeholder="Enter last name"
              value={values.lastName}
              onChange={handleChange}
            />
            {errors.lastName && <p>{errors.lastName}</p>}
          </Form.Group>
        </Form.Row>
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
            {errors.email && <p>{errors.email}</p>}
          </Form.Group>
          <Form.Group as={Col} controlId="phone">
            <Form.Label className="form-label">Phone Number</Form.Label>
            <Form.Control
              className="form-input"
              name="phone"
              placeholder="Enter a phone number"
              value={values.phone}
              onChange={handleChange}
            />
            {errors.phone && <p>{errors.phone}</p>}
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
            {errors.password && <p>{errors.password}</p>}
          </Form.Group>
          <Form.Group as={Col} controlId="confirmPassword">
            <Form.Label className="form-label">Confirm Password</Form.Label>
            <Form.Control
              className="form-input"
              name="confirmPassword"
              type="password"
              placeholder="Enter the password again"
              value={values.confirmPassword}
              onChange={handleChange}
            />
            {errors.confirmPassword && <p>{errors.confirmPassword}</p>}
          </Form.Group>
        </Form.Row>
        <Button variant="primary" type="submit">
          Register
        </Button>
      </Form>
    </div>
  );
}
