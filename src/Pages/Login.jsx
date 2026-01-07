import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  function handleLogin() {
    const saved = JSON.parse(localStorage.getItem("doctorAccount"));

    if (!saved) {
      setError("No doctor account found. Please sign up first.");
      return;
    }

    if (email === saved.email && password === saved.password) {
      localStorage.setItem("doctorLoggedIn", "true");

      // Save doctor details separately for prescription
      localStorage.setItem(
        "doctorDetails",
        JSON.stringify({
          name: saved.name,
          qualification: saved.qualification,
          clinic: saved.clinic,
        })
      );

      navigate("/create");
    } else {
      setError("Invalid email or password!");
    }
  }

  return (
    <div className="page" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
      <div className="card" style={{ width: "350px", padding: "30px", textAlign: "center" }}>
        <h2>Doctor Login</h2>

        <input
          className="input"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="input"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && <p style={{ color: "red" }}>{error}</p>}

        <button className="btn" onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
}

export default Login;
