import { useState } from "react";

function MedicineList({ medicines, setMedicines }) {
  const [medicine, setMedicine] = useState({
    name: "",
    dosage: "",
    duration: "",
  });

  function addMedicine() {
    if (!medicine.name || !medicine.dosage || !medicine.duration) {
      alert("Please fill all medicine fields.");
      return;
    }

    setMedicines([...medicines, medicine]);
    setMedicine({ name: "", dosage: "", duration: "" });
  }

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div className="card">
        <h3>Add Medicines</h3>

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

        <button className="btn" onClick={addMedicine}>
          Add Medicine
        </button>
      </div>
    </div>
  );
}

export default MedicineList;
