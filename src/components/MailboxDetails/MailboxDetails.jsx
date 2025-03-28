import { useParams } from "react-router-dom"; // useParams() grabs the id from the URL

const MailboxDetails = ({ mailboxes }) => {
  const { id } = useParams();
  const mailbox = mailboxes.find((m) => m._id === Number(id)); // .find() checks if that mailbox exists

  if (!mailbox) {
    return <h2>Mailbox Not Found!</h2>;
  }

  return (
    <div>
      <h2>Mailbox Details</h2>
      <p>
        <strong>Box Number:</strong> {mailbox._id}
      </p>
      <p>
        <strong>Box Owner:</strong> {mailbox.boxOwner}
      </p>
      <p>
        <strong>Box Size:</strong> {mailbox.boxSize}
      </p>
    </div>
  );
};

export default MailboxDetails;
