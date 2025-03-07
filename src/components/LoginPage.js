import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";

const LoginPage = ({ setIsAuthenticated }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [govProof, setGovProof] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [chatOpen, setChatOpen] = useState(false);
  const navigate = useNavigate();

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    setIsAuthenticated(true);
    navigate("/");
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    if (!govProof) {
      setErrorMessage("Government proof is required.");
      return;
    }
    setIsFlipped(false);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const validTypes = ["application/pdf", "image/jpeg"];

    if (file && validTypes.includes(file.type)) {
      setGovProof(file);
      setErrorMessage("");
    } else {
      setGovProof(null);
      setErrorMessage("Only .pdf and .jpg files are allowed.");
    }
  };

  return (
    <div className="login-container dark-mode">
      
      {/* Call-to-Action Heading - Placed ABOVE the Login Box */}
      <div className="login-header">
        <h2 className="login-title">You are not alone. <br /> We are here to help.</h2>
      </div>

      <div className="login-box">
        <div className={`flip-card ${isFlipped ? "flipped" : ""}`}>
          <div className="flip-card-inner">
            
            {/* Login Form */}
            <div className="flip-card-front">
              <form onSubmit={handleLoginSubmit}>
                <div className="input-group">
                  <label>USERNAME</label>
                  <input type="email" required placeholder="Enter your email" />
                </div>
                <div className="input-group">
                  <label>PASSWORD</label>
                  <input type="password" required placeholder="Enter your password" />
                </div>
                <button className="login-btn" type="submit">Step Forward</button>
              </form>
              <p className="switch-text" onClick={() => setIsFlipped(true)}>
                Don't have an account? <span>Sign up</span>
              </p>
              <p className="forgot-password">
                We’ll help you regain access.  
                <button className="forgot-password-btn">Forgot Password?</button>
              </p>
            </div>

            {/* Signup Form */}
            <div className="flip-card-back">
              <form onSubmit={handleSignupSubmit}>
                <div className="input-group">
                  <label>FULL NAME</label>
                  <input type="text" required placeholder="Enter your full name" />
                </div>
                <div className="input-group">
                  <label>EMAIL</label>
                  <input type="email" required placeholder="Enter your email" />
                </div>
                <div className="input-group">
                  <label>PASSWORD</label>
                  <input type="password" required placeholder="Create a password" />
                </div>
                <div className="input-group">
                  <label>GOVERNMENT PROOF (PDF/JPG only)</label>
                  <input type="file" required accept=".pdf, .jpg" onChange={handleFileChange} />
                  {govProof && <p className="file-name">Selected: {govProof.name}</p>}
                  {errorMessage && <p className="error-message">{errorMessage}</p>}
                </div>
                <button className="login-btn" type="submit" disabled={!govProof}>
                  Proceed Safely
                </button>
              </form>
              <p className="switch-text" onClick={() => setIsFlipped(false)}>
                Already have an account? <span>Log in</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Heart-shaped Chatbot */}
      <div className="chatbot" onClick={() => setChatOpen(!chatOpen)}>
        <p>FEEL FREE TO TALK TO US</p>
      </div>

      {/* Chat Window (Placeholder) */}
      {chatOpen && (
        <div className="chat-window">
          <p>How can we assist you today?</p>
          <button onClick={() => setChatOpen(false)}>Close</button>
        </div>
      )}

      {/* Footer */}
      <div className="footer">
        <p><strong>WHO WE ARE? <br /> WHAT WE DO?</strong></p>
      </div>
    </div>
  );
};

export default LoginPage;
