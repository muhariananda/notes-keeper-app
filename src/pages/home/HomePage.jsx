import React from "react";
import PropTypes from "prop-types";
import { useSearchParams } from "react-router-dom";

import EmptyMessage from "../../components/EmptyMessage";
import NotesList from "../../components/NotesList";
import SearchBar from "../../components/SearchBar";
import HomePageAction from "../../components/HomePageAction";
import { getActiveNotes } from "../../utils/local-data";

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getActiveNotes(),
      keyword: props.defaultKeyword || "",
    };
  }

  handleKeywordChange = (keyword) => {
    this.setState({ keyword });
    this.props.keywordChange(keyword);
  };

  render() {
    const { notes, keyword } = this.state;
    const isNotesEmpty = notes.length === 0;
    const filteredNotes = notes.filter((note) => {
      return note.title.toLowerCase().includes(keyword.toLowerCase());
    });

    return (
      <section className="homepage">
        <h2>Catatan Aktif</h2>

        <SearchBar keyword={keyword} keywordChange={this.handleKeywordChange} />

        {!isNotesEmpty ? (
          <NotesList notes={filteredNotes} />
        ) : (
          <EmptyMessage message={"Tidak ada catatan"} />
        )}

        <HomePageAction />
      </section>
    );
  }
}

HomePage.propType = {
  defaultKeyword: PropTypes.string,
  keywordChange: PropTypes.func.isRequired,
};

const HomePageWrapper = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const keyword = searchParams.get("keyword");

  function changeSearchParams(keyword) {
    setSearchParams({ keyword });
  }

  return (
    <HomePage defaultKeyword={keyword} keywordChange={changeSearchParams} />
  );
};

export default HomePageWrapper;
