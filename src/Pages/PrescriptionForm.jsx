import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
import "./PrescriptionForm.css";

function PrescriptionForm() {
  const navigate = useNavigate();

  const [doctor, setDoctor] = useState(null);
  const [patient, setPatient] = useState({ name: "", age: "", symptoms: "" });
  const [medicine, setMedicine] = useState({ name: "", dosage: "", duration: "" });
  const [medList, setMedList] = useState([]);
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    const savedDoctor = JSON.parse(localStorage.getItem("doctorDetails"));
    if (!savedDoctor) {
      alert("No doctor details found. Please login again.");
      navigate("/login");
      return;
    }
    setDoctor(savedDoctor);

    const toEdit = JSON.parse(localStorage.getItem("editPrescription"));
    if (toEdit) {
      setEditId(toEdit.id);
      setPatient(toEdit.patient);
      setMedList(toEdit.medicines);
      localStorage.removeItem("editPrescription");
    }
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

    const date = new Date().toLocaleDateString("en-IN");
    const prescriptionId = editId || "RX-" + Math.floor(100000 + Math.random() * 900000);

    const finalData = {
      id: prescriptionId,
      date,
      doctor,
      patient,
      medicines: medList,
    };

    let all = JSON.parse(localStorage.getItem("prescriptions")) || [];
    if (editId) {
      all = all.map((p) => (p.id === editId ? finalData : p));
    } else {
      all.push(finalData);
    }

    localStorage.setItem("prescriptions", JSON.stringify(all));
    navigate(`/preview/${prescriptionId}`);
  }

  return (
    <div className="page form-page">

      <h1 className="title">
        {editId ? "Edit Prescription" : "Create Prescription"}
      </h1>

      {doctor && (
        <div className="card">
          <h2>Doctor Information</h2>
          <p><b>Name:</b> {doctor.name}</p>
          <p><b>Qualification:</b> {doctor.qualification}</p>
          <p><b>Clinic:</b> {doctor.clinic}</p>
        </div>
      )}

      <div className="card">
        <h2>Patient Details</h2>
        <div className="input-row">
          <input type="text" placeholder="Patient Name" value={patient.name}
            onChange={(e) => setPatient({ ...patient, name: e.target.value })} />

          <input type="number" placeholder="Age" value={patient.age}
            onChange={(e) => setPatient({ ...patient, age: e.target.value })} />

          <input type="text" placeholder="Symptoms" value={patient.symptoms}
            onChange={(e) => setPatient({ ...patient, symptoms: e.target.value })} />
        </div>
      </div>

      <div className="card">
        <h2>Add Medicines</h2>

        <div className="input-row">
          <input type="text" placeholder="Medicine Name" value={medicine.name}
            onChange={(e) => setMedicine({ ...medicine, name: e.target.value })} />

          <input type="text" placeholder="Dosage (1-0-1)" value={medicine.dosage}
            onChange={(e) => setMedicine({ ...medicine, dosage: e.target.value })} />

          <input type="text" placeholder="Duration (5 days)" value={medicine.duration}
            onChange={(e) => setMedicine({ ...medicine, duration: e.target.value })} />
        </div>

        <div className="btn-center">
          <button className="btn" onClick={addMedicine}>Add Medicine</button>
        </div>
      </div>

      <div className="btn-center">
        <button className="btn" onClick={submit}>
          {editId ? "Update Prescription" : "Preview Prescription"}
        </button>
      </div>

    </div>
  );
}

export default PrescriptionForm;
