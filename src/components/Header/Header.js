import { Link } from "wouter";
import {useAuth} from "../../context/authContext";
import "./header.css";

export default function Header() {
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout()
  }

  return (
    <header className="header">
      {
      user 
      ? <div className='header__link' onClick={handleLogout}>Logout</div>
      : <Link className='header__link' to="/login">Login</Link>
      }
    </header>
  );
}
