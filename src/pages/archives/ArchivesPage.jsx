import React from "react";
import PropTypes from "prop-types";
import { useSearchParams } from "react-router-dom";

import SearchBar from "../../components/SearchBar";
import NotesList from "../../components/NotesList";
import EmptyMessage from "../../components/EmptyMessage";
import { getArchivedNotes } from "../../utils/local-data";

class ArchivesPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getArchivedNotes(),
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
      <section className="archives-page">
        <h2>Catatan Arsip</h2>
        <SearchBar keyword={keyword} keywordChange={this.handleKeywordChange} />

        {!isNotesEmpty ? (
          <NotesList notes={filteredNotes} />
        ) : (
          <EmptyMessage message={"Arsip kosong"} />
        )}
      </section>
    );
  }
}

ArchivesPage.propTypes = {
  defaultKeyword: PropTypes.string,
  keywordChange: PropTypes.func.isRequired,
};

const ArchivesPageWrapper = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const keyword = searchParams.get("keyword");

  function changeSearchParams(keyword) {
    setSearchParams({ keyword });
  }

  return (
    <ArchivesPage defaultKeyword={keyword} keywordChange={changeSearchParams} />
  );
};

export default ArchivesPageWrapper;
