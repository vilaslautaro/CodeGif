import { useLocation } from "wouter";
import { useAuth } from "context/authContext";
import { useLocation } from "wouter";
import { useForm } from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';

export default function Register({ onLogin }) {
  const { signInWithEmailAndPassword } = useAuth();
  const [, navigate] = useLocation();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = async (values) => {
    try {
      await signInWithEmailAndPassword(values.email, values.password);
      onLogin && onLogin();
      navigate("/");
    } catch (error) {
      console.log(error.message)
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input 
        type="email" 
        placeholder="Email" 
        {...register("email"), {required: "This is required."} } 
      />
      <ErrorMessage 
        errors={errors} 
        name="email" 
        as="div"
      />
      <input 
        type="password" 
        placeholder="password"
        {...register("password"), {required: "This is required."}} 
      />
      <ErrorMessage 
        errors={errors} 
        name="password" 
        as="div"
      />
      <button className="form__btn">Login</button>
    </form>
  );
}
