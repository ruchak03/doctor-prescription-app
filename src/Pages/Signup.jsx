import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [form, setForm] = useState({
    email: "",
    password: "",
    name: "",
    qualification: "",
    clinic: ""
  });

  const navigate = useNavigate();

  function handleSignup() {
    if (!form.email || !form.password || !form.name || !form.qualification || !form.clinic) {
      alert("Please fill all fields!");
      return;
    }

    // Save doctor account
    localStorage.setItem("doctorAccount", JSON.stringify(form));

    alert("Signup successful! Please login.");
    navigate("/login");
  }

  return (
    <div className="page" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
      <div className="card" style={{ width: "400px", padding: "25px", textAlign: "center" }}>
        <h2>Doctor Signup</h2>

        <input
          className="input"
          placeholder="Doctor Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <input
          className="input"
          placeholder="Qualification (MBBS, MD)"
          value={form.qualification}
          onChange={(e) => setForm({ ...form, qualification: e.target.value })}
        />

        <input
          className="input"
          placeholder="Clinic Address"
          value={form.clinic}
          onChange={(e) => setForm({ ...form, clinic: e.target.value })}
        />

        <input
          className="input"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <input
          className="input"
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />

        <button className="btn" onClick={handleSignup}>Signup</button>
      </div>
    </div>
  );
}

export default Signup;
