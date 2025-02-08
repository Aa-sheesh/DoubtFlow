import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Timetable from "./pages/Timetable";
import { useUserStore } from "./stores/useUserStore";

function App() {
  const {user}=useUserStore();
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={!user?<Login />:<Timetable/>} />
        <Route path="/timetable" element={<Timetable />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
