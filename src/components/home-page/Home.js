import React from "react";
import HomeBanner from "./HomeBanner";
import RandomProducts from "./RandomProducts";
import "./Home.css";
import About from "../About";

export default function Home() {

  console.log(window.sessionStorage.getItem('userName'));

  return (
    <div id="home-container">
      <HomeBanner />
      <RandomProducts />
      <div id="about-container">
        <About />
      </div>
    </div>
  );
}
