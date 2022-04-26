import { useLocation } from "wouter";
import { useAuth } from "context/authContext";
import { useForm } from "react-hook-form";
import Button from "components/Button";
import {
  ErrorMessage,
  Form,
  Input,
  Label,
  ContainerForm,
  TitleForm,
} from "./Login.styles";

export default function Login({ onLogin }) {
  const { login } = useAuth();
  const [, navigate] = useLocation();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = async (values) => {
    try {
      await login(values.email, values.password);
      onLogin && onLogin();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <TitleForm>Login</TitleForm>
      <ContainerForm>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Label>
            Email
            <Input
              type="email"
              placeholder="Email"
              autoComplete="email"
              {...register("email", { required: "This is required." })}
            />
            <ErrorMessage errors={errors} name="email" as="div" />
          </Label>
          <Label>
            Password
            <Input
              type="password"
              autoComplete="current-password"
              placeholder="Password"
              {...register("password", { required: "This is required." })}
            />
            <ErrorMessage errors={errors} name="password" as="div" />
          </Label>
          <Button>Login</Button>
        </Form>
      </ContainerForm>
    </>
  );
}
