import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  function handleLogin() {
    const saved = JSON.parse(localStorage.getItem("doctorAccount"));
    if (!saved) return setError("No doctor account found. Please sign up.");

    if (email === saved.email && password === saved.password) {
      localStorage.setItem("doctorLoggedIn", "true");
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
    <div className="page">
      <div className="card" style={{ maxWidth: "350px", textAlign: "center" }}>
        <h2>Doctor Login</h2>

        <input
          className="input-row input"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="input-row input"
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
