import React from "react";
import PropTypes from "prop-types";

const AddNewPageInput = ({ title, titleChange, inputBody }) => (
  <div className="add-new-page__input">
    <input
      className="add-new-page__input__title"
      placeholder="Judul..."
      value={title}
      onChange={titleChange}
      required
    />

    <div
      className="add-new-page__input__body"
      data-placeholder="Catatan..."
      contentEditable
      onInput={inputBody}
      required
    />
  </div>
);

AddNewPageInput.propTypes = {
  title: PropTypes.string.isRequired,
  titleChange: PropTypes.func.isRequired,
  inputBody: PropTypes.func.isRequired,
};

export default AddNewPageInput;
