import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import Loader from "../../components/Loader";
import SearchBar from "../../components/SearchBar";
import NotesList from "../../components/NotesList";
import EmptyMessage from "../../components/EmptyMessage";
import { getArchivedNotes } from "../../utils/network-data";

const ArchivesPage = () => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  const [searchParams, setSearchParams] = useSearchParams();
  const [keyword, setKeyword] = useState(
    () => searchParams.get("keyword") || ""
  );

  useEffect(() => {
    const fetchArchiveNotes = async () => {
      try {
        const { data } = await getArchivedNotes();
        setNotes(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchArchiveNotes();
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
    <section className="archives-page">
      <h2>Catatan Arsip</h2>
      <SearchBar keyword={keyword} keywordChange={handleKeywordChange} />

      {loading ? (
        <Loader />
      ) : !isNotesEmpty ? (
        <NotesList notes={filteredNotes} />
      ) : (
        <EmptyMessage message={"Arsip kosong"} />
      )}
    </section>
  );
};

export default ArchivesPage;
