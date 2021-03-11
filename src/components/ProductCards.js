import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const ProductCards = (props) => {
  // Props.products required
  // Should be an array that contains product models

  console.log(props.products);

  const productCards = props.products.map((p) => {
    const newLinkTo = {
      pathname: `/product/${p.id}`,
    };

    const formattedPrice = parseInt(p.price).toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });

    return (
      <Card className="col-auto mb-3" style={cardStyle}>
        <div className="card-img-container" style={imgContainerStyle}>
          <Card.Img
            style={cardImgStyle}
            variant="top"
            src={
              p.imageLink
                ? `http://localhost:8080/api/product/${p.id}/image/download`
                : "/no-img.png"
            }
            className="img-fluid"
          />
        </div>
        <Card.Body style={cardBodystyle}>
          <Link to={newLinkTo}>
            <Card.Title style={titleStyle}>{p.title}</Card.Title>
          </Link>

          <Card.Text style={priceStyle}>{formattedPrice}</Card.Text>

          {/*<Card.Text style={priceStyle}>{p.dateOfAnnounce}</Card.Text>*/}
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">
            Added {getDateString(p.dateOfAnnounce)}
          </small>
        </Card.Footer>
      </Card>
    );
  });

  return <React.Fragment>{productCards}</React.Fragment>;
};

export const getDateString = (dateOfAnnounce) => {
  const today = new Date();
  const announceDateInMs = parseInt(dateOfAnnounce);

  //calculate total number of seconds between two dates
  const totalSeconds = Math.floor((today - announceDateInMs) / 1000);
  if (totalSeconds < 60) {
    return `${totalSeconds} seconds ago`;
  }

  //calculate days difference by dividing total seconds in a day
  const totalMinutes = Math.floor(totalSeconds / 60);
  if (totalMinutes < 60) {
    return `${totalMinutes} minutes ago`;
  }

  const totalHours = Math.floor(totalMinutes / 60);
  if (totalHours < 24) {
    return `${totalHours} hours ago`;
  } else {
    const totalDays = Math.floor(totalHours / 24);
    return `${totalDays} days ago`;
  }

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

export default ProductCards;
