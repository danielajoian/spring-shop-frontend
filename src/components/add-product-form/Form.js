import React, { useState } from "react";
import AddProduct from "./AddProduct";
import FormSuccess from "./FromSuccess";
import ImageDropzone from "./ImageDropzone";

export default function Form() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [newProductId, setNewProductId] = useState({id: null});

  function submitForm() {
    setIsSubmitted(true);
  }
  console.log(newProductId);
  return (
    <div>
      {!isSubmitted ? <AddProduct submitForm={submitForm} setNewProductId={setNewProductId}/> : <ImageDropzone productId = {newProductId.id} />}
    </div>
  );
}
