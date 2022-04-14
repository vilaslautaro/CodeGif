import { useState } from "react";
import {useLocation} from 'wouter'
import {useAuth} from '../../context/authContext'

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false)
  const [, pushLocation] = useLocation()
  const {login} = useAuth()

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      await login(email, password)
      pushLocation('/')
    }
    catch(error){
      setError(error.message)
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button>Login</button>
      {error && <p>{error}</p>}
    </form>
  );
}
