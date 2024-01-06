import React from "react";
import PropTypes from "prop-types";
import NoteItem from "./NoteItem";

const NotesList = ({ notes }) => (
  <section className="notes-list">
    {notes.map((note) => (
      <NoteItem key={note.id} {...note} />
    ))}
  </section>
);

NotesList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default NotesList;
