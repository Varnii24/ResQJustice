import React, { useState } from "react";
import "./Dashboard.css";

const Dashboard = () => {
  const [selectedStep1, setSelectedStep1] = useState(null);
  const [selectedStep2, setSelectedStep2] = useState(null);

  const steps = [
    { title: "Report the Crime", icon: "🚔", value: "report" },
    { title: "Medical Examination", icon: "🏥", value: "medical" },
    { title: "Legal Rights & Support", icon: "⚖️", value: "legal" },
    { title: "Compensation & Support", icon: "💰", value: "compensation" },
    { title: "Counseling & Recovery", icon: "🧠", value: "counseling" },
  ];

  const step2Content = {
    report: {
      title: "Upload Evidence for Legal Action",
      content: "Securely upload images, videos, or documents as evidence.",
      action: "Upload Evidence",
      nextStep: "Send evidence to NGO contacts.",
    },
    medical: {
      title: "Connect with Hospitals & Health Services",
      content: "Find emergency medical care & tips on physical injuries.",
      action: "Find Hospitals",
      nextStep: "List of hospitals with contact details.",
    },
    legal: {
      title: "Know Your Legal Rights",
      content: "Learn about laws protecting victims of harassment & assault.",
      action: "View Legal Rights",
      nextStep: "Detailed list of legal rights.",
    },
    compensation: {
      title: "Health Insurance & Compensation",
      content:
        "Explore insurance policies covering medical & mental health treatments.",
      action: "View Insurance Options",
      nextStep: "List of insurance policies & coverage details.",
    },
    counseling: {
      title: "NGO & Support Groups Assistance",
      content:
        "Connect with NGOs, anonymous support groups, and live chat representatives.",
      action: "Connect with NGOs",
      nextStep: "NGO contacts, support groups & live chat options.",
    },
  };

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Your Path to Justice</h1>
      <p className="dashboard-subtitle">A step-by-step guide for survivors</p>

      {/* Steps Navigation */}
      <div className="steps-nav">
        <button className={`step-button ${!selectedStep1 ? "active" : ""}`}>
          Step 1
        </button>
        <button className={`step-button ${selectedStep1 && !selectedStep2 ? "active" : ""}`}>
          Step 2
        </button>
        <button className={`step-button ${selectedStep2 ? "active" : ""}`}>
          Step 3
        </button>
      </div>

      {/* Step 1: Select a Category */}
      {!selectedStep1 ? (
        <div className="steps-container">
          {steps.map((step, index) => (
            <div
              className="step-card"
              key={index}
              onClick={() => setSelectedStep1(step.value)}
            >
              <div className="step-icon">{step.icon}</div>
              <h3>{step.title}</h3>
              <button className="start-btn">Start Here</button>
            </div>
          ))}
        </div>
      ) : !selectedStep2 ? (
        // Step 2: Select Action Based on Step 1
        <div className="step2-container">
          <h2>{step2Content[selectedStep1].title}</h2>
          <p>{step2Content[selectedStep1].content}</p>
          <button
            className="start-btn"
            onClick={() => setSelectedStep2(true)}
          >
            {step2Content[selectedStep1].action}
          </button>
          <button className="back-btn" onClick={() => setSelectedStep1(null)}>
            🔙 Go Back
          </button>
        </div>
      ) : (
        // Step 3: Show Final Step Details
        <div className="step3-container">
          <h2>Final Step</h2>
          <p>{step2Content[selectedStep1].nextStep}</p>
          <button className="back-btn" onClick={() => setSelectedStep2(null)}>
            🔙 Go Back
          </button>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
