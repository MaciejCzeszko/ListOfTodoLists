import { getAuth } from "firebase/auth";
import { Header } from "../components/dashboard/Header";
import { Outlet, useNavigate } from "react-router-dom";

export function Dashboard() {
  const navigate = useNavigate();

  getAuth().onAuthStateChanged((user) => {
    if (!user) navigate("/login");
  });

  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
