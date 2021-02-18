import { useState, useEffect } from "react";
import axios from "axios";

const useAddForm = (submitForm, validate) => {
  const [values, setValues] = useState({
    title: "",
    description: "",
    price: "",
    category: "",
    imageLink: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

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
    setIsSubmitting(true);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      axios.post("http://localhost:8080/api/product", values);

      submitForm();
    }
  }, [errors]);

  return { values, handleChange, handleSubmit, errors };
};

export default useAddForm;
