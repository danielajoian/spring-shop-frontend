export default function validateInfo(values) {
  let errors = {};

  if (!values.title.trim()) {
    errors.title = "Title required";
  }

  if (!values.description) {
    errors.description = "Description required";
  }

  if (!values.price) {
    errors.price = "Price required";
  } else if (!isNumeric(values.price)) {
    errors.price = "Price must be a number";
  }

  if (!values.category) {
    errors.category = "Select a category";
  }

  return errors;
}

function isNumeric(n) {
  return !isNaN(parseInt(n)) && isFinite(n);
}
