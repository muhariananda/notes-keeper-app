import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import EmptyMessage from "../../components/EmptyMessage";
import Loader from "../../components/Loader";
import SearchBar from "../../components/SearchBar";
import NotesList from "../../components/NotesList";
import HomePageAction from "./components/HomePageAction";
import { getActiveNotes } from "../../utils/network-data";

const HomePage = () => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  const [searchParams, setSearchParams] = useSearchParams();
  const [keyword, setKeyword] = useState(() => {
    return searchParams.get("keyword") || "";
  });

  useEffect(() => {
    const fetchActiveNotes = async () => {
      try {
        const { data } = await getActiveNotes();
        setNotes(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchActiveNotes();
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

      {loading ? (
        <Loader />
      ) : !isNotesEmpty ? (
        <NotesList notes={filteredNotes} />
      ) : (
        <EmptyMessage message={"Tidak ada catatan"} />
      )}

      <HomePageAction />
    </section>
  );
};

export default HomePage;
