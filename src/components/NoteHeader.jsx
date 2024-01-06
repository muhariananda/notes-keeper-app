import React from "react";
import { Link } from "react-router-dom";

const NoteHeader = () => (
  <header>
    <h1>
      <Link to="/">Aplikasi Catatan</Link>
    </h1>

    <Navigation />
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

export default NoteHeader;
