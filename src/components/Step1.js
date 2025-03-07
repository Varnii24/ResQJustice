import "../styles/Step1.css";

const Step1 = ({ setSelectedOption }) => {
  const options = [
    { label: "Report the Crime", value: "report" },
    { label: "Medical Examination", value: "medical" },
    { label: "Legal Rights & Support", value: "legal" },
    { label: "Compensation & Support", value: "compensation" },
    { label: "Counseling & Recovery", value: "counseling" },
  ];

  return (
    <div className="steps-container">
      {options.map((option) => (
        <button
          key={option.value}
          className="step-button"
          onClick={() => setSelectedOption(option.value)}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
};

export default Step1;
