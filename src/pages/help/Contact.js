import { useNavigate } from "react-router-dom";

export default function Contact({ path }) {
  const link = path || "/help/choose-attorney";
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();

    navigate(`/${link}`);
  };

  return (
    <div className="contact">
      <h3>Contact Us</h3>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Your email:</span>
          <input type="email" name="email" required />
        </label>
        <label>
          <span>Your message:</span>
          <textarea name="message" required></textarea>
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
}
