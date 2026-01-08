import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function AllPrescriptions() {
  const [list, setList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("prescriptions")) || [];
    setList(stored);
  }, []);

  function deletePrescription(id) {
    const filtered = list.filter((p) => p.id !== id);
    setList(filtered);
    localStorage.setItem("prescriptions", JSON.stringify(filtered));
  }

  function editPrescription(prescription) {
    localStorage.setItem("editPrescription", JSON.stringify(prescription));
    navigate("/create");
  }

  return (
    <div style={{ color: "white", padding: "30px" }}>
      <h1>All Prescriptions</h1>

      {list.length === 0 ? (
        <p>No prescriptions found</p>
      ) : (
        list.map((p) => (
          <div
            key={p.id}
            style={{
              background: "rgba(255,255,255,0.1)",
              padding: "20px",
              margin: "15px 0",
              borderRadius: "10px",
            }}
          >
            <h3>{p.id}</h3>
            <p>Date: {p.date}</p>
            <p>Patient: {p.patient.name}</p>

            <button onClick={() => navigate("/preview/" + p.id)}>
              View
            </button>

            <button
              style={{ marginLeft: "10px" }}
              onClick={() => editPrescription(p)}
            >
              Edit
            </button>

            <button
              style={{ marginLeft: "10px", color: "red" }}
              onClick={() => deletePrescription(p.id)}
            >
              Delete
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default AllPrescriptions;
