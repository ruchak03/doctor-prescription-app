import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import PrescriptionForm from "./Pages/PrescriptionForm";
import Preview from "./Pages/Preview";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import PrescriptionList from "./Pages/PrescriptionList"; // NEW PAGE

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<PrescriptionForm />} />

        {/* MUST HAVE ID */}
        <Route path="/preview/:id" element={<Preview />} />

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* New list route */}
        <Route path="/list" element={<PrescriptionList />} />
      </Routes>
    </Router>
  );
}

export default App;
