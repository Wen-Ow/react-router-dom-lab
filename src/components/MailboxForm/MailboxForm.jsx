import { useState } from "react";
import { useNavigate } from "react-router-dom"; // useNavigate redirects the user after form submission

const MailboxForm = ({ addBox }) => {
  const [formData, setFormData] = useState({
    boxOwner: "",
    boxSize: "Small",
  });

  const navigate = useNavigate();

  const handleChange = (e) => { // handleChange updates the form data or state
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => { // handleSubmit adds a new mailbox and redirects to /mailboxes
    e.preventDefault();
    addBox(formData);
    navigate("/mailboxes");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Box Owner:
        <input name="boxOwner" value={formData.boxOwner} onChange={handleChange} required />
      </label>
      <label>
        Box Size:
        <select name="boxSize" value={formData.boxSize} onChange={handleChange}>
          <option>Small</option>
          <option>Medium</option>
          <option>Large</option>
        </select>
      </label>
      <button type="submit">Create Mailbox</button>
    </form>
  );
};

export default MailboxForm;
