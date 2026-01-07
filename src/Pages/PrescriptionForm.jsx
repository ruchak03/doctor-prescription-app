import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./PrescriptionForm.css";

function PrescriptionForm() {
  const navigate = useNavigate();

  // Doctor Details (Auto-loaded)
  const [doctor, setDoctor] = useState(null);

  // Patient Inputs
  const [patient, setPatient] = useState({
    name: "",
    age: "",
    symptoms: "",
  });

  // Medicine Inputs
  const [medicine, setMedicine] = useState({
    name: "",
    dosage: "",
    duration: "",
  });

  const [medList, setMedList] = useState([]);

  // Load doctor details from localStorage
  useEffect(() => {
    const savedDoctor = JSON.parse(localStorage.getItem("doctorDetails"));

    if (!savedDoctor) {
      alert("No doctor details found. Please login again.");
      navigate("/login");
      return;
    }

    setDoctor(savedDoctor);
  }, []);

  function addMedicine() {
    if (!medicine.name || !medicine.dosage || !medicine.duration) {
      alert("Please fill all medicine details!");
      return;
    }

    setMedList([...medList, medicine]);
    setMedicine({ name: "", dosage: "", duration: "" });
  }

  function submit() {
    if (!patient.name || !patient.age || !patient.symptoms) {
      alert("Please fill patient details!");
      return;
    }

    if (medList.length === 0) {
      alert("Please add at least one medicine!");
      return;
    }

    const prescriptionId = "RX-" + Math.floor(100000 + Math.random() * 900000);
    const date = new Date().toLocaleDateString("en-IN");

    const finalData = {
      id: prescriptionId,
      date: date,
      doctor: doctor, // Auto loaded
      patient: patient,
      medicines: medList,
    };

    localStorage.setItem("prescription", JSON.stringify(finalData));
    navigate("/preview");
  }

  return (
    <div className="form-wrapper">
      <h1 style={{ textAlign: "center", color: "#fff", marginBottom: "20px" }}>
        Create Prescription
      </h1>

      {/* Doctor Details Display Only */}
      {doctor && (
        <div className="card">
          <h2>Doctor Information</h2>

          <p><b>Name:</b> {doctor.name}</p>
          <p><b>Qualification:</b> {doctor.qualification}</p>
          <p><b>Clinic:</b> {doctor.clinic}</p>
        </div>
      )}

      {/* Patient Details */}
      <div className="card">
        <h2>Patient Details</h2>

        <div className="input-row">
          <input
            type="text"
            placeholder="Patient Name"
            value={patient.name}
            onChange={(e) => setPatient({ ...patient, name: e.target.value })}
          />

          <input
            type="number"
            placeholder="Age"
            value={patient.age}
            onChange={(e) => setPatient({ ...patient, age: e.target.value })}
          />

          <input
            type="text"
            placeholder="Symptoms"
            value={patient.symptoms}
            onChange={(e) => setPatient({ ...patient, symptoms: e.target.value })}
          />
        </div>
      </div>

      {/* Add Medicines */}
      <div className="card">
        <h2>Add Medicines</h2>

        <div className="input-row">
          <input
            type="text"
            placeholder="Medicine Name"
            value={medicine.name}
            onChange={(e) => setMedicine({ ...medicine, name: e.target.value })}
          />

          <input
            type="text"
            placeholder="Dosage (1-0-1)"
            value={medicine.dosage}
            onChange={(e) => setMedicine({ ...medicine, dosage: e.target.value })}
          />

          <input
            type="text"
            placeholder="Duration (5 days)"
            value={medicine.duration}
            onChange={(e) =>
              setMedicine({ ...medicine, duration: e.target.value })
            }
          />
        </div>

        <div className="btn-center">
          <button className="btn" onClick={addMedicine}>
            Add Medicine
          </button>
        </div>
      </div>

      {/* Submit */}
      <div className="btn-center">
        <button className="btn" onClick={submit}>
          Preview Prescription
        </button>
      </div>
    </div>
  );
}

export default PrescriptionForm;
