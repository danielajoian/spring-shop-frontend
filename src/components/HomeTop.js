import React from "react";
import { useHistory } from "react-router-dom";
import bg from "../try.jpg";

export default function HomeTop() {
  const pageStyle = {
    background: `url(${bg}) no-repeat center center`,
    webkitBackgroundSize: "cover",
    mozBackgroundSize: "cover",
    oBackgroundSize: "cover",
    backgroundSize: "cover",
    height: "900px",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
  };

  const bigText = {
    color: "#E8E8E8",
    textShadow: "2px 2px 2px black",
    flexFlow: "column wrap",
    fontSize: "80px",
  };

  const mediumText = {
    color: "#E8E8E8",
    textShadow: "2px 2px 2px black",
    flexFlow: "column wrap",
    fontSize: "50px",
  };

  const buttonStyle = {
    width: "8em",
    height: "3em",
    border: "1px solid #2F4858",
    borderRadius: "10px",
    color: "white",
    backgroundColor: "#000000bb",
    fontSize: "1.5rem",
    fontWeight: "800",
  };

  function onHover(e) {
    e.target.style.border = "2px solid white";
    e.target.style.color = "white";
    e.target.style.backgroundColor = "#2F4858";
  }

  function hoverOut(e) {
    e.target.style.border = "2px solid #2F4858";
    e.target.style.color = "#white";
    e.target.style.backgroundColor = "#000000bb";
  }

  const history = useHistory();

  const routeChange = () => {
    let path = "/add-product";
    history.push(path);
  };

  return (
    <div style={pageStyle}>
      <div>
        <h1 style={bigText}>Do you have goods for sale?</h1>
        <br />
        <p style={mediumText}>Join our community</p>
        <br />
        <button
          style={buttonStyle}
          onMouseEnter={onHover}
          onMouseLeave={hoverOut}
          onClick={routeChange}
        >
          Add a product
        </button>
      </div>
    </div>
  );
}
