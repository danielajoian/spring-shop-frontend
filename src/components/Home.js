import React from 'react';
import bg from "../try.jpg"


export default function Home() {

    const pageStyle = {
        background: `url(${bg}) no-repeat center center`,
        webkitBackgroundSize: "cover",
        mozBackgroundSize: "cover",
        oBackgroundSize: "cover",
        backgroundSize: "cover",
        height: "900px",
        justifyContent: "center",
        alignItems: "center",
        display: "flex"
    }

    const textStyle = {
        color: "#E8E8E8",
        textShadow: "2px 2px 2px black",
        fontSize: "80px"
    }

	return (<div style={pageStyle}>
        <h1 style={textStyle}>Trade goods simple and easy</h1>
    </div>);
}