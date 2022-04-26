import { Link, Button } from "./Button.styles";

export default function ButtonComponent({ href, children }) {
  return href ? <Link to={href}>{children}</Link> : <Button>{children}</Button>;
}
