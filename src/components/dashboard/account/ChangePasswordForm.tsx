import { useState } from "react";
import { Button } from "../../Button";
import {
  User,
  signInWithEmailAndPassword,
  updatePassword,
} from "firebase/auth";
import { auth } from "../../../firebase";

type Input = {
  email: string;
  setChangePassword: (value: boolean) => void;
  setMessage: (value: string) => void;
};

export function ChangePasswordForm({
  email,
  setChangePassword,
  setMessage,
}: Input) {
  const [currPassword, setCurrPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");

  function handlePasswordChange(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setChangePassword(false);
    if (newPassword !== confPassword)
      return setMessage("New passwords do not match, try again!");

    signInWithEmailAndPassword(auth, email, currPassword)
      .then(() => {
        updatePassword(auth.currentUser as User, newPassword)
          .then(() => setMessage("Password changed"))
          .catch(() => setMessage("Something went wrong, try again!"));
      })
      .catch((err) => {
        setMessage(err.code);
      });
  }

  return (
    <form
      className="flex flex-col items-start gap-2"
      onSubmit={(e) => handlePasswordChange(e)}
    >
      <label
        htmlFor="currPassword"
        className=" text-gray-900 font-bold text-lg"
      >
        Current password:
      </label>
      <input
        id="currPassword"
        type="password"
        required
        className="border border-gray-400 rounded-md px-2 py-1 text-lg"
        value={currPassword}
        onChange={(e) => setCurrPassword(e.target.value)}
      />
      <label
        htmlFor="newPassword1"
        className=" text-gray-900 font-bold text-lg"
      >
        New password:
      </label>
      <input
        id="newPassword1"
        type="password"
        required
        minLength={6}
        className="border border-gray-400 rounded-md px-2 py-1 text-lg"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
      />
      <label
        htmlFor="newPassword2"
        className=" text-gray-900 font-bold text-lg"
      >
        Confirm new password:
      </label>
      <input
        id="newPassword2"
        type="password"
        required
        minLength={6}
        className="border border-gray-400 rounded-md px-2 py-1 text-lg"
        value={confPassword}
        onChange={(e) => setConfPassword(e.target.value)}
      />
      <Button type="submit">Change password</Button>
    </form>
  );
}
