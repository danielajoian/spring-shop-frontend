import { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const useEdit = (validate, productId) => {

    const history = useHistory();

  const [values, setValues] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:8080/api/product/${productId}`)
    .then(res => setValues(res.data))
  }, []);

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      axios.put(`http://localhost:8080/api/product`, values, {
        headers: {
          Authorization: `Bearer ${window.localStorage.getItem("token")}`,
        }
      })
        .then(res => {
            if (res.status == 200) {
                history.push(`/product/${productId}`);
            }
        })
    }
  }, [errors]);


  return { values, handleChange, handleSubmit, errors };
};

export default useEdit;