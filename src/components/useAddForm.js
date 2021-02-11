import { useState } from "react";
import axios from "axios";

const useAddForm = (validate) => {
  const [values, setValues] = useState({
    title: "",
    description: "",
    price: "",
    category: "",
    imageLink: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
    console.log(values);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("HandleSubmit");
    setErrors(validate(values));
    axios.post("http://localhost:8080/api/product", values);
    console.log("dupa axios post");
  };

  return { values, handleChange, handleSubmit, errors };
};

export default useAddForm;
