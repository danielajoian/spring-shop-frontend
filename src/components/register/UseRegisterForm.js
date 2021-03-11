import { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const UseRegisterForm = (validate) => {

  const history = useHistory();

  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
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
    console.log("handler submit");
    setErrors(validate(values));
    setIsSubmitting(true);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
        axios.post("http://localhost:8080/api/user", values)
        .then( res => {
          console.log(res.status)
          if (res.status === 200) {
            // history.push("/login");
            history.push("/success");
          }
        }, () => {
          setErrors({email: "Email taken"})
        });
    }
  }, [errors]);

  return { values, handleChange, handleSubmit, errors };
};

export default UseRegisterForm;
