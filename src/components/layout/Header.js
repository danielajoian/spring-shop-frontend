import React from 'react';
import logo from "../../logo.png";
import {Link} from "react-router-dom";

export default function Header() {

    const barStyle = {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        top: "0"
    }

    const upperStyle = {
        display: "flex",
	    flexDirection: "row",
        backgroundColor: "#2F4858"
    }

    const linksStyle = {
        marginLeft: "auto",
        marginRight: "5%",
        display: "flex",
        alignItems: "center" 
    }

    const linkStyle = {
        fontFamily: "'Montserrat', sans-serif",
	    fontSize: "20px",
	    fontWeight: "normal",
        color: "white",
        padding: "20px",
    }
    
    const pStyle = {
        fontFamily: "'Montserrat', sans-serif",
	    fontSize: "20px",
	    fontWeight: "normal",
        color: "#DDEF3F",
        padding: "20px 0px 20px 40px",
        marginTop: "5px"
    }
    
    const userNameStyle = {...linkStyle, padding: "20px 20px 20px 5px", color: "pink"}

    const logoStyle = {
        marginLeft: "5%"
    }

    if(window.sessionStorage.getItem('userId') === null) {
        return (
            <div style = {barStyle}>
                <div style = {upperStyle}>
                    <div style = {logoStyle}>
                        <Link exact to="/">
                        <img src={logo} width="250px" height="150px" alt="logo"></img>
                        </Link>
                    </div>
                    <div style = {linksStyle}>
                        <Link exact to="/" style = {linkStyle}>
                            Home
                        </Link>
    
                        <Link to="/about" style = {linkStyle}>
                            About
                        </Link>
    
                        <Link to="/products" style = {linkStyle}>
                            Products
                        </Link>
    
                        <Link to="/login" style = {linkStyle}>
                            Login
                        </Link>
    
                        <Link to="/register" style = {linkStyle}>
                            Register
                        </Link>
                    </div>
                </div>
            </div>
            );
    } else {
        return (
            <div style = {barStyle}>
                <div style = {upperStyle}>
                    <div style = {logoStyle}>
                        <Link exact to="/">
                        <img src={logo} width="250px" height="150px" alt="logo"></img>
                        </Link>
                    </div>
                    <div style = {linksStyle}>
                        <Link exact to="/" style = {linkStyle}>
                            Home
                        </Link>
    
                        <Link to="/about" style = {linkStyle}>
                            About
                        </Link>
    
                        <Link to="/products" style = {linkStyle}>
                            Products
                        </Link>
    
                        <h5 style = {pStyle}>Logged as 
                        <Link to={`/${window.sessionStorage.getItem('userId')}/products`} style = {userNameStyle}>
                            {window.sessionStorage.getItem('userName')}
                        </Link></h5>
    
                    </div>
                </div>
            </div>
            );
     }
}