import React from "react";
import PropTypes from "prop-types";

const EmptyMessage = ({ message }) => (
  <div className="notes-list-empty">
    <p>{message}</p>
  </div>
);

EmptyMessage.propTypes = {
  message: PropTypes.string.isRequired,
};

export default EmptyMessage;
