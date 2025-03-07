import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <div className="hero">
      <h1>Empowering Survivors, Seeking Justice</h1>
      <p>We are here to provide support and guidance for those in need.</p>
      <p>Your safety and justice matter. Report your case securely and get the help you need.</p>
      <Link to="/report">
        <button className="cta-button">Report a Case Now</button>
      </Link>
    </div>
  );
}

export default HeroSection;
