import React, { useContext } from "react";
import PropTypes from "prop-types";
import LocalContext from "../contexts/LocaleContext";
import { search } from "../utils/locale";

const SearchBar = ({ keyword, keywordChange }) => {
  const { locale } = useContext(LocalContext);

  return (
    <section className="search-bar">
      <input
        type="text"
        className="search-bar"
        placeholder={search[locale].placeholder}
        value={keyword}
        onChange={(event) => keywordChange(event.target.value)}
      />
    </section>
  );
};

SearchBar.propTypes = {
  keyword: PropTypes.string.isRequired,
  keywordChange: PropTypes.func.isRequired,
};

export default SearchBar;
