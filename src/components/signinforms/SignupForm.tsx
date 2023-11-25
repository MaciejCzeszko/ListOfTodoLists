import {
  User,
  browserSessionPersistence,
  createUserWithEmailAndPassword,
  getAuth,
  sendEmailVerification,
  setPersistence,
} from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { Button } from "../Button";

export function SignupForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPass, setConfPass] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    getAuth().onAuthStateChanged((user) => {
      if (user) navigate("/");
    });
  }, []);

  function onSubmitHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (password !== confPass) return setError("Passwords do not match");

    setPersistence(auth, browserSessionPersistence).then(() => {
      createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
          sendEmailVerification(auth.currentUser as User);
        })
        .catch((error) => {
          console.error(error);
          setError(error);
        });
    });
    setEmail("");
    setPassword("");
    setConfPass("");
    navigate("/");
  }

  return (
    <>
      {error && <span className="text-2xl font-bold pb-4">{error}</span>}
      <form className="max-w-sm" onSubmit={(e) => onSubmitHandler(e)}>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Your email
          </label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            id="email"
            autoFocus
            required
            className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500  block w-full p-4"
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Your password
          </label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            minLength={6}
            type="password"
            id="password"
            required
            className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500  block w-full p-4"
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="confPassword"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Confirm your password
          </label>
          <input
            onChange={(e) => setConfPass(e.target.value)}
            value={confPass}
            minLength={6}
            type="password"
            id="confPassword"
            required
            className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500  block w-full p-4"
          />
        </div>
        <Button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm py-2 px-4"
        >
          Sign Up!
        </Button>
      </form>
    </>
  );
}
