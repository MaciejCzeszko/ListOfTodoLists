import { Route, Routes } from "react-router-dom";
import { Signup } from "./pages/Signup";

function App() {
  return (
    <main className="h-screen w-screen p-4 flex items-center">
      <Routes>
        <Route path="/" />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" />
      </Routes>
    </main>
  );
}

export default App;
