import React from "react";
import PropTypes from "prop-types";
import { HiCheck } from "react-icons/hi";

const AddNewPageAction = ({ addNote }) => (
  <div className="add-new-page__action">
    <button className="action" type="button" title="Simpan" onClick={addNote}>
      <HiCheck />
    </button>
  </div>
);

AddNewPageAction.propTypes = {
  addNote: PropTypes.func.isRequired,
};

export default AddNewPageAction;
