import Login from "components/Login";
import Helmet from "react-helmet";

export default function LoginPage() {
  return (
    <>
      <Helmet>
        <title>Login | GifSticky</title>
        <meta
          name="description"
          content="Log in to the application"
        />
      </Helmet>
      <Login />
    </>
  );
}
