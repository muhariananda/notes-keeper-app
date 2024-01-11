import React from "react";
import PropTypes from "prop-types";

const MultiProvider = ({ contexts, children }) =>
  contexts.reduce(
    (acc, [Context, value]) => (
      <Context.Provider value={value}>{acc}</Context.Provider>
    ),
    children
  );

MultiProvider.propTypes = {
  contexts: PropTypes.array.isRequired,
  children: PropTypes.node.isRequired,
};

export default MultiProvider;
