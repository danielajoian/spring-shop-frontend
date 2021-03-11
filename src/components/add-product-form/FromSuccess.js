import React from "react";

export default function FromSuccess() {
  return (
    <div>
      <h1
        style={{
          fontSize: "4rem",
          fontWeight: "lighter",
            padding: "1rem"
        }}
      >
        Your product has been listed!
      </h1>
        <img
            // style={{maxWidth: "200px"}}
            // src="/success.png"
            src="/great.gif"
            alt="success"/>
    </div>
  );
}
