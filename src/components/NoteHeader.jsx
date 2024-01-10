import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { MdLogout } from "react-icons/md";

const NoteHeader = ({ authedUser, logout }) => (
  <header>
    <h1>
      <Link to="/">Aplikasi Catatan</Link>
    </h1>

    {authedUser && <Navigation />}

    {authedUser && (
      <button className="button-logout" type="button" onClick={() => logout()}>
        <MdLogout />
        {authedUser.name}
      </button>
    )}
  </header>
);

const Navigation = () => (
  <nav className="navigation">
    <ul>
      <li>
        <Link to="/archives">Arsip</Link>
      </li>
    </ul>
  </nav>
);

NoteHeader.propTypes = {
  authedUser: PropTypes.object,
  logout: PropTypes.func.isRequired,
};

export default NoteHeader;
