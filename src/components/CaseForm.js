import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CaseForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    govProof: null,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      govProof: e.target.files[0],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.govProof) {
      alert("Please fill all fields and upload a valid government proof.");
      return;
    }

    alert("Case submitted successfully! Redirecting to dashboard...");
    navigate("/ngo-dashboard");
  };

  return (
    <div className="case-form-container">
      <h2>Submit a Case</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="file"
          accept=".jpg,.png,.pdf"
          onChange={handleFileChange}
          required
        />
        <button type="submit">Submit Case</button>
      </form>
    </div>
  );
}

export default CaseForm;
