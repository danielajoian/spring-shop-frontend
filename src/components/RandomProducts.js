import React, { useState, useEffect } from "react";
import { Card, CardColumns } from "react-bootstrap";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";

export default function RandomProducts() {

    const [products, setProducts] = useState([]);
    const randomProducts = [];
    const getProducts = () => {
    axios
        .get("http://localhost:8080/api/product/")
        .then((res) => {
            // setProducts(res.data)
            if (res.data.length > 0) {
                randomProducts.push(res.data[Math.floor(Math.random() * Math.floor(res.data.length))])
                randomProducts.push(res.data[Math.floor(Math.random() * Math.floor(res.data.length))])
                randomProducts.push(res.data[Math.floor(Math.random() * Math.floor(res.data.length))])
            }
            setProducts(randomProducts);
        });
    };

    useEffect(getProducts, []);

    const history = useHistory();

    const productCards = products.map((p) => {
        const newLinkTo = {
            pathname: `/product/${p.id}/${p.userId}`,
            productId: p.id,
            userId: p.userId,
        };

        let routeChange = () => { 
            let path = newLinkTo; 
            history.push(path);
        }
    
        return (
            <Card style={cardStyle}>
                <div className="card-img-container">
                    <Card.Img
                        style={cardImgStyle}
                        variant="top"
                        src={p.imageLink}
                        className="img-fluid"
                    />
                    </div>
                <Card.Body style={cardBodyStyle}>
                    <Card.Title>{p.title}</Card.Title>

                    <button
                        style={buttonStyle}
                        onMouseEnter = {onHover}
                        onMouseLeave = {hoverOut}
                        onClick = {routeChange}>
                            Details
                    </button>
                </Card.Body>
            </Card>
        );
    });

    let routeChange = () => { 
        let path = "/products"; 
        history.push(path);
    }
    
    return <div style = {{backgroundColor: "#2F4858"}}>
            <h1 style = {{marginTop: "100px", color: "white"}}>You can find the products you want!</h1>
            <CardColumns style={cardDeckStyle}>{productCards}</CardColumns>
            <button
                style={buttonStyle}
                onMouseEnter = {onHover}
                onMouseLeave = {hoverOut}
                onClick = {routeChange}>
                    All Products
            </button>
        </div>
}
    
    const cardDeckStyle = {
      width: "80%",
      margin: "100px auto"
    };
    
    const cardStyle = {
      minHeight: "100%",
    };
    
    const cardBodyStyle = {
      minHeight: "10rem",
    };
    
    const cardImgStyle = {
      width: "auto",
      height: "auto",
      maxWidth: "400px",
      maxHeight: "15rem",
    };

    const buttonStyle = {
        width: "8em",
        height: "3em",
        border: "1px solid #2F4858",
        borderRadius: "8%",
        color: "#2F4858"
    }
  
    function onHover (e) {
      e.target.style.border = "2px solid white";
      e.target.style.color = "white";
      e.target.style.backgroundColor = "#2F4858";
    }
  
    function hoverOut (e) {
      e.target.style.border = "2px solid #2F4858";
      e.target.style.color = "#2F4858";
      e.target.style.backgroundColor = "white";
    }
