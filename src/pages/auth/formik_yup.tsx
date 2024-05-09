import * as yup from "yup";
import { object, string, number, date, InferType } from "yup";
import { useFormik } from "formik";
import { InferGetServerSidePropsType, GetServerSidePropsContext } from "next";
import { getCsrfToken } from "next-auth/react";

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const csrfToken = await getCsrfToken(context);

  return {
    props: { csrfToken: csrfToken || null },
  };
}

export const passRules =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/;

const formik = useFormik({
  initialValues: {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  },
  validationSchema: yup.object({
    firstName: yup
      .string()
      .max(15, "Must be 15 characters or less")
      .required("Required"),
    lastName: yup
      .string()
      .max(20, "Must be 20 characters or less")
      .required("Required"),
    email: yup.string().email("Invalid email address").required("Required"),
    password: yup.string().matches(passRules, { message: "WrongPassword" }),
  }),
  onSubmit: (values) => {
    alert(JSON.stringify(values, null, 2));
  },
});
console.log(formik);
// You'll update this function later...
// const handleFieldChange = (key: keyof ReturnType<login>) => () => {
//   setLogin({ ...login, [key]: e.target.value });
// };
