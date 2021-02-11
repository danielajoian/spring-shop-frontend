import React from "react";

export default function FromSuccess() {
  return (
    <div>
      <img style={{ maxWidth: "200px" }} src="/success.png" alt="success"></img>
      <h1
        style={{
          fontSize: "4rem",
          fontWeight: "lighter",
        }}
      >
        Your product has been listed!
      </h1>
    </div>
  );
}
