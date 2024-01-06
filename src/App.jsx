import React from "react";
import { Route, Routes } from "react-router-dom";
import AddPage from "./pages/AddPage";
import ArchivesPage from "./pages/ArchivesPage";
import DetailPage from "./pages/DetailPage";
import HomePage from "./pages/HomePage";
import NoteHeader from "./components/NoteHeader";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <div className="app-container">
      <NoteHeader />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/archives" element={<ArchivesPage />} />
          <Route path="/notes/new" element={<AddPage />} />
          <Route path="/notes/:id" element={<DetailPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
