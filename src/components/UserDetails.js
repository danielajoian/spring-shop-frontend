import React from "react";

export default function UserDetails(props) {
  console.log("user id este " + props.userId);
  return <div>{props.userId}</div>;
}
