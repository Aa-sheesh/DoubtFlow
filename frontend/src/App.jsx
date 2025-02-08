import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Timetable from "./pages/Timetable";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/timetable" element={<Timetable />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
