import { useState, useEffect } from "react";
import axios from "axios";

const useAddForm = (submitForm, validate, setNewProductId) => {
  const [values, setValues] = useState({
    title: "",
    description: "",
    price: "",
    date: "",
    category: "",
    imageLink: "",
    user: {},
  });

  const userId = window.localStorage.getItem("userId");

  const [user, setUser] = useState();

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
    // console.log(values);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("HandleSubmit");
    setErrors(validate(values));
    setIsSubmitting(true);
  };

  useEffect(() => {
    axios.get(`http://localhost:8080/api/user/${userId}`).then((res) => {
      setUser(res.data);
    });
  }, []);

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      values.user = user;
      axios
        .post("http://localhost:8080/api/product", values, {
          headers: {
            Authorization: `Bearer ${window.localStorage.getItem("token")}`,
          },
        })
        .then((res) => setNewProductId({ id: res.data.id }));

      submitForm();
    }
  }, [errors]);

  return { values, handleChange, handleSubmit, errors };
};

export default useAddForm;
