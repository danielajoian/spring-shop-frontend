import { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const UseRegisterForm = () => {
  const history = useHistory();

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({ message: "" });
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

  /**
   * Requests user ID and Name and stores it in localStorage
   *
   * This method is only called after a succesful JWT token validation
   */
  const setUserInfo = async () => {
    const req = axios.get(
      `http://localhost:8080/api/user/email/${values.email}`
    );
    const res = await req;

    window.localStorage.setItem(
      "userName",
      res.data.firstName + " " + res.data.lastName
    );
    window.localStorage.setItem("userId", res.data.id);
  };

  useEffect(() => {
    if (isSubmitting) {
      console.log("in useEffect");

      // Axios POST on the "/authenticate" endpoint of the api
      // The server checks if the credentials (email & password) are valid
      // And returns a JWT token
      axios
        .post("http://localhost:8080/authenticate", {
          username: values.email,
          password: values.password,
        })
        .then((res) => {
          // Get user data and store it in localStorage
          setUserInfo();

          // Also, store the token in localStorage
          window.localStorage.setItem("token", res.data.jwtToken);

          // Store a flag that lets us know the user has been logged in
          window.localStorage.setItem("isLogged", true);
        })
        .catch(() => {
          setErrors({ message: "Invalid email/password" });
          setIsSubmitting(false);
        })
        .finally(() => {
          history.push("/");
          window.location.reload();
        });
    }
  }, [isSubmitting]);

  return { values, handleChange, handleSubmit, errors };
};

export default UseRegisterForm;
