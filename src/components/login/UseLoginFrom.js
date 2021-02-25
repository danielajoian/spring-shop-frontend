import { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const UseRegisterForm = () => {

  const history = useHistory();

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({message: ""});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
  };

  useEffect(() => {
    if (isSubmitting) {
      console.log("in useEffect")
      axios.get(`http://localhost:8080/api/user/email/${values.email}`)
        .then(res => {
          if (values.email === res.data.email && values.password === res.data.password) {
            console.log("correct stats");
            console.log(res.data);
            window.sessionStorage.setItem('userName', res.data.firstName + " " + res.data.lastName);
            window.sessionStorage.setItem('userId', res.data.id);
            history.push("/");
            window.location.reload();
          } else {
            setErrors({message: "Invalid email or password!"})
          }
          setIsSubmitting(false);
        }, () => {
          setErrors({message: "Invalid email or password!"})
          setIsSubmitting(false);
        })
      }
  }, [isSubmitting]);

  return { values, handleChange, handleSubmit, errors };
};

export default UseRegisterForm;
