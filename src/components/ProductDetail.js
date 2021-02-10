import axios from "axios";
import React, { useState, useEffect } from "react";

export default function ProductDetail(props) {
  const productId = props.match.params.productId;
  const userId = props.match.params.userId;

  // Fetch product data
  const [product, setProduct] = useState();
  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/product/${productId}`)
      .then((res) => setProduct(res.data));
  }, [productId]);

  const [user, setUser] = useState();
  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/user/${userId}`)
      .then((res) => setUser(res.data));
  }, [userId]);

  console.log(product);
  console.log(user);

  return <div>{/* <UserDetails></UserDetails> */}</div>;
}
