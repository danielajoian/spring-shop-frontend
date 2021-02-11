import React from "react";
import HomeBot from "./HomeBot";
import HomeMid from "./HomeMid"
import HomeTop from "./HomeTop";

export default function Home() {

  return (
    <div style = {{backgroundColor: "#2F4858"}}>
      <HomeTop/>
      <HomeMid/>
      <HomeBot/>
    </div>
  );
}
