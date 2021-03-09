import React from 'react';
import {Card} from 'react-bootstrap';
import { Link } from "react-router-dom";

const ProductCards = (props) => {
    
    // Props.products required
    // Should be an array that contains product models

    const productCards = props.products.map((p) => {
        const newLinkTo = {
          pathname: `/product/${p.id}`,
        };
    
        return (
          <Card className="col-auto mb-3" style={cardStyle}>
            <div className="card-img-container" style={imgContainerStyle}>
                <Card.Img 
                  style={cardImgStyle}
                  variant="top"
                  src={p.imageLink ?
                    `http://localhost:8080/api/product/${p.id}/image/download`
                    : '/no-img.png'}
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
              <small className="text-muted">Last updated {p.timePassedSinceTheAnnounce} days ago</small>
            </Card.Footer>
          </Card>
        );
      });

    return (
        <React.Fragment>
            {productCards}
        </React.Fragment>
    )
}

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

export default ProductCards
