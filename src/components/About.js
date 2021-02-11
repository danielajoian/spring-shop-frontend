import React from "react";

export default function About() {
  const containerStyle = {
    width: "60%",
    margin: "15rem auto",
    color: "#2F4858",
    backgroundColor: "white",
    padding: "1rem",
    borderRadius: "10px",
    boxShadow: "-1px 1px 24px -6px rgba(0, 0, 0, 0.452)",
  };

  return (
    <div style={containerStyle}>
      <h1>
        <b>About</b>
      </h1>
      <br />
      <br />
      <h4>
        We are a team of developers called "The guys" who started working
        together about 10 months ago when we joined CodeCool. We started our
        journey in a bigger team and under different name but from beginning
        until now the two team members{" "}
        <a href="https://github.com/MadalinCiobanu">Madalin Ciobanu</a> &nbsp;
        and <a href="https://github.com/bobel95">Iulian Popa</a> &nbsp; worked
        together on various projects. Our history is not so long but we managed
        to learn a lot along the way.
      </h4>
      <br />
      <br />
      <h4>
        This project called "Best Deals Shop" is part of the Advanced Module and
        is a web application. The project is a trading platform where u can make
        account, login, add products for sale, or buy products from other users.
      </h4>
      <br />
      <br />
      <h2>
        <b>Our Mission</b>
      </h2>
      <br />
      <h4>To practice and learn more about Spring and React</h4>
      <br />
      <br />
      <br />
      <br />
      <p>
        For GitHub links click{" "}
        <a href="https://github.com/bobel95/spring-shop-backend">here</a>
        &nbsp; and{" "}
        <a href="https://github.com/bobel95/spring-shop-frontend">here</a>
      </p>
    </div>
  );
}
