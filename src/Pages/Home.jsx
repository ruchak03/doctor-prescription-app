import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="page center-page">
      <div className="home-container">

        <h1 className="main-title">Doctor Digital Prescription System</h1>

        <p className="subtitle">
          A modern way to create fast and digital prescriptions.
        </p>

        {/* Create Prescription Button */}
        <Link to="/create">
          <button className="btn">Create Prescription</button>
        </Link>

        {/* Spacing Between Buttons */}
        <div style={{ marginTop: "25px" }}>
          <p className="links">
            <Link to="/login">Doctor Login</Link>
          </p>

          <p className="links">
            <Link to="/signup">Doctor Sign Up</Link>
          </p>

          <p className="links">
            <Link to="/list">View All Prescriptions</Link>
          </p>
        </div>

      </div>
    </div>
  );
}

export default Home;
