import { useEffect, useState } from "react";

function Preview() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem("prescription");

    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        setData(parsed);
      } catch (error) {
        console.error("JSON Parse Error:", error);
      }
    }
  }, []);

  if (!data) {
    return (
      <h2 style={{ color: "white", textAlign: "center", marginTop: "40px" }}>
        No Data Found
      </h2>
    );
  }

  return (
    <div
      className="page"
      style={{
        width: "100vw",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        paddingTop: "40px",
        paddingBottom: "40px",
        color: "white",
      }}
    >
      <div
        style={{
          width: "600px",
          background: "rgba(255,255,255,0.08)",
          padding: "30px",
          borderRadius: "15px",
          boxShadow: "0 0 25px rgba(0,0,0,0.3)",
        }}
      >
        {/* Heading */}
        <h1 style={{ marginBottom: "10px" }}>Prescription Preview</h1>

        {/* Prescription ID & Date */}
        <p><b>Prescription ID:</b> {data.id}</p>
        <p><b>Date:</b> {data.date}</p>

        <hr style={{ margin: "15px 0", borderColor: "#666" }} />

        {/* Doctor Info */}
        <h3>Doctor Information</h3>
        <p><b>Name:</b> {data.doctor?.name}</p>
        <p><b>Qualification:</b> {data.doctor?.qualification}</p>
        <p><b>Clinic Address:</b> {data.doctor?.clinic}</p>

        <hr style={{ margin: "15px 0", borderColor: "#666" }} />

        {/* Patient Info */}
        <h3>Patient Information</h3>
        <p><b>Name:</b> {data.patient?.name}</p>
        <p><b>Age:</b> {data.patient?.age}</p>
        <p><b>Symptoms:</b> {data.patient?.symptoms}</p>

        <hr style={{ margin: "15px 0", borderColor: "#666" }} />

        {/* Medicines */}
        <h3>Medicines</h3>
        <ul>
          {data.medicines?.map((m, i) => (
            <li key={i} style={{ marginBottom: "5px" }}>
              <b>{m.name}</b> — {m.dosage} — {m.duration}
            </li>
          ))}
        </ul>

        {/* Print Button */}
        <button
          className="btn"
          onClick={() => window.print()}
          style={{ marginTop: "20px" }}
        >
          Print Prescription
        </button>
      </div>
    </div>
  );
}

export default Preview;
