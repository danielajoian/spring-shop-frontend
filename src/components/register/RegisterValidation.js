import validator from "validator";

export default function validate(values) {
    let errors = {};
  
    if (!values.firstName.trim()) {
      errors.firstName = "First Name required";
    } else if (values.firstName.length < 3 || values.firstName.length > 20) {
      errors.firstName = "The size must be 3-20 chars";
    }
  
    if (!values.lastName.trim()) {
      errors.lastName = "Last Name required";
    } else if (values.lastName.length < 3 || values.lastName.length > 20) {
      errors.lastName = "The size must be 3-20 chars";
    }
  
    if (!validator.isEmail(values.email)) {
      errors.email = "Incorrect email";
    }
  
    if (!values.phone.trim()) {
      errors.phone = "Phone required";
    } else if (values.phone.length < 7 || values.phone.length > 15) {
      errors.phone = "The size must be 7-15 chars";
    }

    if (!values.password) {
        errors.password = "Password required";
    } else if (values.password.length < 3 || values.password.length > 20) {
      errors.password = "The size must be 3-20 chars";
    }

    if (!(values.password === values.confirmPassword)) {
        errors.confirmPassword = "Incorrect password";
    } else if (values.confirmPassword.length < 3 || values.confirmPassword.length > 20) {
      errors.confirmPassword = "The size must be 3-20 chars";
    }
  
    return errors;
  }