import { Link } from "react-router-dom"; // import the Link component

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link> {/* Link from react-router-dom is like an <a> tag but without refreshing the page. */}
        </li>
        <li>
          <Link to="/mailboxes">Mailboxes</Link>
        </li>
        <li>
          <Link to="/new">New Mailbox</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
