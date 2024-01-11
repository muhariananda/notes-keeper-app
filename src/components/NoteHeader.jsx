import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { MdLogout, MdDarkMode, MdLightMode } from "react-icons/md";
import ThemeContext from "../contexts/ThemeContext";

const Navigation = () => (
  <nav className="navigation">
    <ul>
      <li>
        <Link to="/archives">Arsip</Link>
      </li>
    </ul>
  </nav>
);

const ThemeToggle = ({ theme, toggleTheme }) => (
  <button className="toggle-theme" type="button" onClick={toggleTheme}>
    {theme === "dark" ? <MdDarkMode /> : <MdLightMode />}
  </button>
);

const LogoutButton = ({ username, logout }) => (
  <button className="button-logout" type="button" onClick={logout}>
    <MdLogout /> {username}
  </button>
);

const NoteHeader = ({ authedUser, logout }) => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header>
      <h1>
        <Link to="/">Aplikasi Catatan</Link>
      </h1>
      {authedUser && <Navigation />}
      {authedUser && <ThemeToggle theme={theme} toggleTheme={toggleTheme} />}
      {authedUser && (
        <LogoutButton username={authedUser.name} logout={logout} />
      )}
    </header>
  );
};

NoteHeader.propTypes = {
  authedUser: PropTypes.object,
  logout: PropTypes.func.isRequired,
};

export default NoteHeader;
