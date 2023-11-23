import { Link } from "react-router-dom";
import { Wrapper } from "../components/Wrapper";
import { LoginForm } from "../components/signins/LoginForm";

export function Login() {
  return (
    <Wrapper>
      <h1 className="mb-8 text-2xl font-bold">Log in!</h1>
      <LoginForm />
      <p className="mt-4">
        You need an account?{" "}
        <Link to={"/signup"} className="text-blue-700 font-bold">
          Signup
        </Link>{" "}
        here!
      </p>
    </Wrapper>
  );
}
