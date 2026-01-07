function PatientForm({ patient, setPatient }) {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div className="card">
        <h3>Patient Details</h3>

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
  );
}

export default PatientForm;
