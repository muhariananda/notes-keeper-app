import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import EmptyMessage from "../../components/EmptyMessage";
import NotesList from "../../components/NotesList";
import SearchBar from "../../components/SearchBar";
import HomePageAction from "./components/HomePageAction";
import { getActiveNotes } from "../../utils/network-data";

const HomePage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [notes, setNotes] = useState([]);
  const [keyword, setKeyword] = useState(() => {
    return searchParams.get("keyword") || "";
  });

  useEffect(() => {
    getActiveNotes().then(({ data }) => {
      setNotes(data);
    });
  }, []);

  const handleKeywordChange = (keyword) => {
    setKeyword(keyword);
    setSearchParams({ keyword });
  };

  const isNotesEmpty = notes.length === 0;
  const filteredNotes = notes.filter((note) => {
    return note.title.toLowerCase().includes(keyword.toLowerCase());
  });

  return (
    <section className="homepage">
      <h2>Catatan Aktif</h2>

      <SearchBar keyword={keyword} keywordChange={handleKeywordChange} />

      {!isNotesEmpty ? (
        <NotesList notes={filteredNotes} />
      ) : (
        <EmptyMessage message={"Tidak ada catatan"} />
      )}

      <HomePageAction />
    </section>
  );
};

export default HomePage;
