import { Link } from "react-router-dom";
import { Wrapper } from "../components/Wrapper";
import { SignupForm } from "../components/signinforms/SignupForm";

export function Signup() {
  return (
    <Wrapper>
      <h1 className="mb-8 text-2xl font-bold">Sign Up!</h1>
      <SignupForm />
      <p className="mt-4">
        You already have an account?{" "}
        <Link to={"/login"} className="text-blue-700 font-bold">
          Login
        </Link>{" "}
        here!
      </p>
    </Wrapper>
  );
}
