import "./Contact.css";

function Contact() {
  return (
    <div className="contact-container">
      <h2>Contact Support</h2>
      <p>Reach out to the right people for help and support.</p>

      <div className="contact-options">
        <button>Email NGO</button>
        <button>Call a Mental Health Expert</button>
        <button>Notify a Family Member</button>
        <button>Talk to a Friend</button>
      </div>
    </div>
  );
}

export default Contact;
