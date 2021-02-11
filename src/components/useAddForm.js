import { useState, useEffect } from "react";

const useAddForm = (validate) => {
  const [values, setValues] = useState({
    title: "",
    description: "",
    price: "",
    category: "",
    image: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("HandleSubmit");
    console.log(values);
    setErrors(validate(values));
  };

  return { values, handleChange, handleSubmit, errors };
};

export default useAddForm;
