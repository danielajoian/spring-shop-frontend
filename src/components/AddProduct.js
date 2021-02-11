import React from "react";
import { Form, Col, Button } from "react-bootstrap";
import useAddForm from "./useAddForm";
import validate from "./addProductValidation";
import "./AddProduct.css";

export default function AddProduct(props) {
  const { values, handleChange, handleSubmit, errors } = useAddForm(
    props.submitForm,
    validate
  );

  return (
    <div className="form-container" style={formContainerStyle}>
      <h1>List your product on BestDeals</h1>
      <Form className="main-form" onSubmit={handleSubmit}>
        <Form.Row>
          <Form.Group as={Col} controlId="title">
            <Form.Label className="form-label">Title</Form.Label>
            <Form.Control
              className="form-input"
              name="title"
              placeholder="Enter product title"
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
              placeholder="Enter product price"
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
              placeholder="Enter product description"
              value={values.description}
              onChange={handleChange}
            />
            {errors.description && <p>{errors.description}</p>}
          </Form.Group>
        </Form.Row>
        <Form.Row>
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
          <Form.Group as={Col} controlId="imageLink">
            <Form.Label className="form-label">Image Link</Form.Label>
            <Form.Control
              className="form-input"
              name="imageLink"
              placeholder="Enter product image link"
              value={values.imageLink}
              onChange={handleChange}
            />
          </Form.Group>
        </Form.Row>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

const formContainerStyle = {
  width: "60%",
  margin: "2rem auto",
};
