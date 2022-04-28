import { Formik } from "formik";
import {
  Form,
  Input,
  ErrorMessage,
  Label,
  ContainerForm,
  TitleForm,
} from "./Register.styles";
import { useAuth } from "context/authContext";
import { useLocation } from "wouter";
import Button from "components/Button";
import { useFav } from "context/favsContext";

export default function Register() {
  const { setShowModalFav } = useFav();
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
    <>
      <TitleForm>Register</TitleForm>
      <ContainerForm>
        <Formik
          initialValues={initialValues}
          validate={validateFields}
          onSubmit={async (values) => {
            try {
              await signUp(values.email, values.password);
              navigate("/login");
              setShowModalFav({
                text: "Successful registration",
                type: "true",
              });
            } catch (error) {
              setShowModalFav({
                text: "Sorry, an error has occurred",
                type: "false",
              });
            }
          }}
        >
          {({ isSubmitting }) => (
            <Form className="form">
              <Label>
                Email
                <Input
                  name="email"
                  type="email"
                  placeholder="Email"
                  autoComplete="email"
                />
                <ErrorMessage name="email" component="div" />
              </Label>
              <Label>
                Password
                <Input
                  name="password"
                  type="password"
                  placeholder="Password"
                  autoComplete="current-password"
                />
                <ErrorMessage name="password" component="div" />
              </Label>
              <Button disabled={isSubmitting}>Register</Button>
            </Form>
          )}
        </Formik>
      </ContainerForm>
    </>
  );
}
