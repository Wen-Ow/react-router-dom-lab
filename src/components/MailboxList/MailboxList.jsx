import { Link } from "react-router-dom"; // Link helps navigate to details using the mailbox's _id

const MailboxList = ({ mailboxes }) => {
  return (
    <div>
      <h2>Mailboxes</h2>
      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}> {/* Flexbox layout with gap and flexWrap */}
        {mailboxes.map((box) => (
          <Link to={`/mailboxes/${box._id}`} key={box._id}> {/* The key prop is set to the mailbox's _id to uniquely identify each mailbox.*/}
            <div className="mail-box">Box #{box._id}</div> {/* Each mailbox is clickable and styled with .mail-box CSS class. */}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MailboxList;

