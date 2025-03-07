import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Home.css";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero">
        <h1>🌟 Empowering Survivors, Seeking Justice</h1>
        <p>
          Your safety and justice matter. Report your case securely and get the support you deserve.
        </p>
        <button className="cta-button" onClick={() => navigate("/report")}>
          Report a Case
        </button>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="about-card">
          <h2>✨ Who We Are?</h2>
          <p>
            <strong>PowerUp</strong> is a survivor-focused platform offering guidance, resources, 
            and a <strong>secure space</strong> to report harassment and violence.
          </p>
        </div>

        <div className="about-card">
          <h2>💡 How We Help?</h2>
          <ul>
            <li>🔒 <strong>Secure & Anonymous</strong> case reporting</li>
            <li>🤝 <strong>Legal & Emotional Support</strong> from experts</li>
            <li>🌍 <strong>Community-Driven</strong> safety initiatives</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Home;
