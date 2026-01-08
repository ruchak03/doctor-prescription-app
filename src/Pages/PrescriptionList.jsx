import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../App.css";

function PrescriptionList() {
  const [prescriptions, setPrescriptions] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const all = JSON.parse(localStorage.getItem("prescriptions")) || [];
    setPrescriptions(all);
  }, []);

  function editPrescription(item) {
    localStorage.setItem("editPrescription", JSON.stringify(item));
    navigate("/create");
  }

  function deletePrescription(id) {
    if (!confirm("Are you sure you want to delete this prescription?")) return;

    let all = JSON.parse(localStorage.getItem("prescriptions")) || [];
    all = all.filter((p) => p.id !== id);

    localStorage.setItem("prescriptions", JSON.stringify(all));
    setPrescriptions(all);
  }

  return (
    <div className="page center-page">
      <div className="card" style={{ width: "900px", padding: "20px" }}>
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
          All Prescriptions
        </h2>

        {prescriptions.length === 0 ? (
          <p style={{ textAlign: "center", fontSize: "18px" }}>
            No prescriptions found.
          </p>
        ) : (
          <ul style={{ listStyle: "none", padding: 0 }}>
            {prescriptions.map((pres) => (
              <li
                key={pres.id}
                style={{
                  background: "rgba(255,255,255,0.08)",
                  padding: "15px",
                  marginBottom: "12px",
                  borderRadius: "10px",
                }}
              >
                <b>ID:</b> {pres.id} <br />
                <b>Patient:</b> {pres.patient.name} <br />
                <b>Date:</b> {pres.date}
                <br />

                <div style={{ marginTop: "10px" }}>
                  <Link
                    to={`/preview/${pres.id}`}
                    className="btn"
                    style={{ marginRight: "10px" }}
                  >
                    View
                  </Link>

                  <button
                    onClick={() => editPrescription(pres)}
                    className="btn"
                    style={{ marginRight: "10px", background: "#4146ff" }}
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => deletePrescription(pres.id)}
                    className="btn"
                    style={{ background: "red" }}
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}

        <div style={{ textAlign: "center", marginTop: "15px" }}>
          <Link to="/" className="btn">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PrescriptionList;
