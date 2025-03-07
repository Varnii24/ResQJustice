import "../styles/Step2.css";

const Step2 = ({ selectedOption }) => {
  const steps = {
    report: {
      title: "Upload Evidence for Legal Action",
      content: "Securely upload images, videos, or documents as evidence.",
      action: <button className="start-btn">Upload Evidence</button>,
    },
    medical: {
      title: "Connect with Hospitals & Health Services",
      content: "Find emergency medical care & tips on physical injuries.",
      action: <button className="start-btn">Find Hospitals</button>,
    },
    legal: {
      title: "Know Your Legal Rights",
      content: "Learn about laws protecting victims of harassment & assault.",
      action: <button className="start-btn">View Legal Rights</button>,
    },
    compensation: {
      title: "Health Insurance & Compensation",
      content:
        "Explore insurance policies covering medical & mental health treatments.",
      action: <button className="start-btn">View Insurance Options</button>,
    },
    counseling: {
      title: "NGO & Support Groups Assistance",
      content:
        "Connect with NGOs, anonymous support groups, and live chat representatives.",
      action: <button className="start-btn">Connect with NGOs</button>,
    },
  };

  const step = steps[selectedOption];

  return (
    <div className="step-card">
      <h2>{step.title}</h2>
      <p>{step.content}</p>
      {step.action}
    </div>
  );
};

export default Step2;
