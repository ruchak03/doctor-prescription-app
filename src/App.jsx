import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import PrescriptionForm from "./Pages/PrescriptionForm.jsx";
import Preview from "./Pages/Preview.jsx";
import Login from "./Pages/Login.jsx";
import Signup from "./Pages/Signup.jsx";   // <-- FIXED

import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<PrescriptionForm />} />
        <Route path="/preview" element={<Preview />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />   {/* <-- FIXED */}
      </Routes>
    </Router>
  );
}

export default App;
