import { Link } from "react-router-dom";

function Home() {
  return (
    <div
      className="page"
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          textAlign: "center",
          width: "100%",
          maxWidth: "700px",
        }}
      >
        <h1
          style={{
            fontSize: "48px",
            marginBottom: "15px",
            whiteSpace: "nowrap",
          }}
        >
          Doctor Digital Prescription System
        </h1>

        <p style={{ opacity: 0.8, fontSize: "18px", marginBottom: "30px" }}>
          A modern way to create fast and digital prescriptions.
        </p>

        {/* Create Prescription Button */}
        <Link to="/create">
          <button className="btn">Create Prescription</button>
        </Link>

        {/* Doctor Login Link */}
        <p style={{ marginTop: "25px" }}>
  <Link to="/login" style={{ color: "#fff", opacity: 0.85 }}>
    Doctor Login
  </Link>
</p>

<p style={{ marginTop: "10px" }}>
  <a href="/signup" style={{ color: "#fff", opacity: 0.8 }}>
    Doctor Sign Up
  </a>
</p>


      </div>
    </div>
  );
}

export default Home;
