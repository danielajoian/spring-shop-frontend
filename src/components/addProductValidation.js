export default function validateInfo(values) {
  let errors = {};

  console.log(values.title);

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
