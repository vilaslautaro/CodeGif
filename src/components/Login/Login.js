import { useState } from "react";
import { useLocation } from "wouter";
import { useAuth } from "../../context/authContext";

export default function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [, navigate] = useLocation();
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      onLogin && onLogin();
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <form className="form__login" onSubmit={handleSubmit}>
      <label>
        Email
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label>
        Password
        <input
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <button className="form__btn">Login</button>
      {error && <p>{error}</p>}
    </form>
  );
}
