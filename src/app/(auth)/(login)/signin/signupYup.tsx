import * as yup from "yup";

// create sign in module

export const schema = yup.object({
  firstName: yup
    .string()
    .max(15, "Must be 15 characters or less")
    .required("Required"),
  lastName: yup
    .string()
    .max(20, "Must be 20 characters or less")
    .required("Required"),
  email: yup.string().email("Invalid email address").required("Required"),
  password: yup.string(),
});
