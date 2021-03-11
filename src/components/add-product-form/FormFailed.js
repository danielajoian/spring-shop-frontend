import React from "react";

export default function FormFailed() {
  return (
    <div>
      <img style={{ maxWidth: "200px" }} src="/caution.png" alt="failed"></img>
      <h1
        style={{
          fontSize: "4rem",
          fontWeight: "lighter",
        }}
      >
        Something went wrong!
      </h1>
    </div>
  );
}
