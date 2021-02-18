import React, { useState } from "react";
import AddProduct from "./AddProduct";
import FormSuccess from "./FromSuccess";

export default function Form() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <div>
      {!isSubmitted ? <AddProduct submitForm={submitForm} /> : <FormSuccess />}
    </div>
  );
}
