import React from "react";
import { Form, Col, Button } from "react-bootstrap";
import validate from "../add-product-form/addProductValidation";
import "../add-product-form/AddProduct.css";
import useEdit from "./useEdit";

export default function EditProduct(props) {
  const { values, handleChange, handleSubmit, errors } = useEdit(
    validate,
    props.match.params.productId
  );

  return (
    <div className="form-container">
      <h1>Edit Product</h1>
      <Form className="main-form" onSubmit={handleSubmit}>
        <Form.Row>
          <Form.Group as={Col} controlId="title">
            <Form.Label className="form-label">Title</Form.Label>
            <Form.Control
              className="form-input"
              name="title"
              value={values.title}
              onChange={handleChange}
            />
            {errors.title && <p>{errors.title}</p>}
          </Form.Group>

          <Form.Group as={Col} controlId="price">
            <Form.Label className="form-label">Price</Form.Label>
            <Form.Control
              className="form-input"
              name="price"
              value={values.price}
              onChange={handleChange}
            />
            {errors.price && <p>{errors.price}</p>}
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} controlId="description">
            <Form.Label className="form-label">Description</Form.Label>
            <Form.Control
              as="textarea"
              className="form-input"
              rows={4}
              name="description"
              value={values.description}
              onChange={handleChange}
            />
            {errors.description && <p>{errors.description}</p>}
          </Form.Group>
        </Form.Row>
        <Form.Row className="align-items-center justify-content-center">
          <Form.Group controlId="category">
            <Form.Label>Select Category</Form.Label>
            <Form.Control
              className="form-input"
              as="select"
              name="category"
              value={values.category}
              onChange={handleChange}
              defaultValue=""
            >
              <option value="">Choose...</option>
              <option value="ELECTRONICS">Electronics</option>
              <option value="HOUSEHOLD">Home & Garden</option>
              <option value="ESTATE">Real Estate</option>
              <option value="SPORTS">Sporting goods & Hobby</option>
            </Form.Control>
            {errors.category && <p>{errors.category}</p>}
          </Form.Group>
        </Form.Row>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}
