export default function validateInfo(values) {
  let errors = {};

  if (!values.title.trim()) {
    errors.title = "Title required";
  } else if (values.title.length < 4 || values.title.length > 30) {
    errors.title = "The size must be 4-30 chars";
  }

  if (!values.description) {
    errors.description = "Description required";
  } else if (values.description.length < 4 || values.description.length > 100) {
    errors.description = "The size must be 4-100 chars";
  }

  if (!values.price) {
    errors.price = "Price required";
  } else {
    if (!isNumeric(values.price)) {
      errors.price = "Price must be a number";
    } else {
      if (values.price < 1) {
        errors.price = "Price must be greater than 0";
      }
    }
  }

  if (!values.category) {
    errors.category = "Select a category";
  }

  if (!values.date) {
    errors.date = "Enter a date";
  }

  return errors;
}

function isNumeric(n) {
  return !isNaN(parseInt(n)) && isFinite(n);
}
