import React from "react";

function NGODashboard() {
  // Fake case data (for now)
  const cases = [
    { id: 1, name: "Jane Doe", status: "Pending" },
    { id: 2, name: "Anonymous", status: "Reviewed" },
    { id: 3, name: "John Smith", status: "Escalated" },
  ];

  return (
    <div style={styles.container}>
      <h2>NGO Dashboard</h2>
      <table style={styles.table}>
        <thead>
          <tr>
            <th>Case ID</th>
            <th>Victim Name</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {cases.map((caseData) => (
            <tr key={caseData.id}>
              <td>{caseData.id}</td>
              <td>{caseData.name}</td>
              <td>{caseData.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const styles = {
  container: { padding: "20px", textAlign: "center" },
  table: { width: "100%", borderCollapse: "collapse", marginTop: "20px" },
};

export default NGODashboard;
