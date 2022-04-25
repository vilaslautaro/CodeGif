import { Formik, Form, Field, ErrorMessage } from "formik";
import { useAuth } from "context/authContext";
import { useLocation } from "wouter";

export default function Register() {
  const { signUp } = useAuth();
  const [, navigate] = useLocation();
  const initialValues = { email: "", password: "" };

  const validateFields = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = "Required email";
    }
    if (!values.password) {
      errors.password = "Required password";
    }

    return errors;
  };

  return (
    <Formik
      initialValues={initialValues}
      validate={validateFields}
      onSubmit={async (values) => {
        try {
          await signUp(values.email, values.password);
          console.log("se ha registrado de manera exitosa");
          navigate("/login");
        } catch (error) {
          console.log(error.message);
        }
      }}
    >
      {({ isSubmitting }) => (
        <Form className="form">
          <Field name="email" type="email" placeholder="Email" />
          <ErrorMessage name="email" component="div" />
          <Field
            name="password"
            type="password"
            placeholder="password"
            autoComplete="current-password"
          />
          <ErrorMessage name="password" component="div" />
          <button className="form__btn" disabled={isSubmitting}>
            Register
          </button>
        </Form>
      )}
    </Formik>
  );
}
