import React from "react";
import About from "./About";

export default function HomeBot() {
  const containerStyle = {
    backgroundColor: "#2F4858",
    padding: "15px",
  };

  return (
    <div style={containerStyle}>
      <About />
    </div>
  );
}
