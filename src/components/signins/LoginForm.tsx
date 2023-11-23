import {
  browserLocalPersistence,
  getAuth,
  setPersistence,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase";

export function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    getAuth().onAuthStateChanged((user) => {
      if (user) navigate("/");
    });
  }, []);

  function onSubmitHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setPersistence(auth, browserLocalPersistence)
      .then(() => {
        return signInWithEmailAndPassword(auth, email, password).then(() => {
          setEmail("");
          setPassword("");
          navigate("/");
        });
      })
      .catch((error) => {
        console.error(error.code);
        setError(error.code);
      });
  }

  return (
    <>
      {error && (
        <span className="text-2xl font-bold pb-4">{error} try again!</span>
      )}
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
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm py-2 px-4"
        >
          Sign Up!
        </button>
      </form>
    </>
  );
}
