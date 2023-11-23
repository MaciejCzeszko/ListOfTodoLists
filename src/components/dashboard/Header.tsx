import { getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export function Header() {
  const navigate = useNavigate();

  return (
    <header className="absolute w-full flex items-center justify-around h-20 text-xl bg-blue-200 shadow-md font-bold">
      <button
        className="py-2 px-6 hover:bg-blue-300 h-full"
        onClick={() => navigate("/")}
      >
        Home
      </button>
      <div className="flex gap-4 h-full">
        <button
          className="py-2 px-4 hover:bg-blue-300"
          onClick={() => navigate("/account")}
        >
          Account settings
        </button>
        <button
          className="py-2 px-4 hover:bg-blue-300"
          onClick={() => {
            getAuth().signOut();
          }}
        >
          Logout
        </button>
      </div>
    </header>
  );
}
