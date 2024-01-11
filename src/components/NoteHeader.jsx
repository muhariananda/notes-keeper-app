import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {
  MdLogout,
  MdDarkMode,
  MdLightMode,
  MdGTranslate,
} from "react-icons/md";
import ThemeContext from "../contexts/ThemeContext";
import LocalContext from "../contexts/LocaleContext";
import { header } from "../utils/locale";

const Navigation = ({ locale }) => (
  <nav className="navigation">
    <ul>
      <li>
        <Link to="/archives">{header[locale].archive}</Link>
      </li>
    </ul>
  </nav>
);

const LocaleToggle = ({ toggleLocale }) => (
  <button className="toggle-locale" type="button" onClick={toggleLocale}>
    <MdGTranslate />
  </button>
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
  const { locale, toggleLocale } = useContext(LocalContext);

  return (
    <header>
      <h1>
        <Link to="/">{header[locale].title}</Link>
      </h1>

      {authedUser && <Navigation locale={locale} />}

      <LocaleToggle toggleLocale={toggleLocale} />

      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />

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
