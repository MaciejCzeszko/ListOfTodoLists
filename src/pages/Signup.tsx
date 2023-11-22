import { SignupForm } from "../components/SignupForm";

export function Signup() {
  return (
    <div className="flex flex-col items-center mx-auto bg-gray-50 p-8 px-16 rounded-lg shadow-md">
      <h1 className="mb-8 text-2xl font-bold">Sign Up!</h1>
      <SignupForm />
    </div>
  );
}
