import { Wrapper } from "../../Wrapper";
import { Button } from "../../Button";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../../firebase";
import { ChangePasswordForm } from "./ChangePasswordForm";

export function Account() {
  const [email, setEmail] = useState<string>("");
  const [changePassword, setChangePassword] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");

  setTimeout(() => {
    setMessage("");
  }, 5000);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, () => {
      if (auth.currentUser) setEmail(auth.currentUser.email || "");
    });
    return () => unsubscribe();
  }, []);

  return (
    <Wrapper>
      <div className="flex flex-col items-start gap-2">
        <span className="font-bold text-lg">Your email:</span>
        <input
          type="email"
          required
          disabled
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          className="border border-gray-400 rounded-md px-2 py-1 text-lg
        text-gray-400"
        />
        {changePassword ? (
          <ChangePasswordForm
            email={email}
            setChangePassword={setChangePassword}
            setMessage={setMessage}
          />
        ) : (
          <>
            <span className="font-bold text-md">{message}</span>
            <Button onClick={() => setChangePassword(true)}>
              Change password
            </Button>
          </>
        )}
      </div>
    </Wrapper>
  );
}
