import { useState } from "react"; // useState keeps track of all mailboxes
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar.jsx";
import MailboxForm from "./components/MailboxForm/MailboxForm.jsx";
import MailboxList from "./components/MailboxList/MailboxList.jsx";
import MailboxDetails from "./components/MailboxDetails/MailboxDetails.jsx";
import "./App.css";

const App = () => {
  const [mailboxes, setMailboxes] = useState([]);

  const addBox = (formData) => {
    // addBox auto-generates an _id based on current mailboxes count
    const newMailbox = {
      ...formData, // spread operator to copy all properties from formData
      _id: mailboxes.length + 1,
    };
    setMailboxes([...mailboxes, newMailbox]);
  };

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<h1>Post Office</h1>} />
        <Route path="/new" element={<MailboxForm addBox={addBox} />} />
        <Route path="/mailboxes" element={<MailboxList mailboxes={mailboxes} />} />
        <Route path="/mailboxes/:id" element={<MailboxDetails mailboxes={mailboxes} />} />
        <Route path="*" element={<h1>Mailbox Not Found!</h1>} />
      </Routes>
    </>
  );
};

export default App;
