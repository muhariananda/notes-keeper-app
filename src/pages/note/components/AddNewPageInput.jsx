import React, { useContext } from "react";
import PropTypes from "prop-types";
import LocalContext from "../../../contexts/LocaleContext";
import { note } from "../../../utils/locale";

const AddNewPageInput = ({ title, titleChange, inputBody }) => {
  const { locale } = useContext(LocalContext);

  return (
    <div className="add-new-page__input">
      <input
        className="add-new-page__input__title"
        placeholder={note[locale].titlePlaceholder}
        value={title}
        onChange={titleChange}
        required
      />

      <div
        className="add-new-page__input__body"
        data-placeholder={note[locale].bodyPlaceholder}
        contentEditable
        onInput={inputBody}
        required
      />
    </div>
  );
};

AddNewPageInput.propTypes = {
  title: PropTypes.string.isRequired,
  titleChange: PropTypes.func.isRequired,
  inputBody: PropTypes.func.isRequired,
};

export default AddNewPageInput;
