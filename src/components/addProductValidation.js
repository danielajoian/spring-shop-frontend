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
  }

  return errors;
}
