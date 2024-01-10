import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import AddPage from "./pages/note/AddPage";
import ArchivesPage from "./pages/archives/ArchivesPage";
import DetailsPage from "./pages/note/DetailsPage";
import HomePage from "./pages/home/HomePage";
import NoteHeader from "./components/NoteHeader";
import NotFoundPage from "./pages/NotFoundPage";
import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";
import { getUserLogged, putAccessToken } from "./utils/network-data";

const App = () => {
  const [authedUser, setAuthedUser] = useState(null);
  const [initializing, setInitializing] = useState(true);

  useEffect(() => {
    getUserLogged().then(({ data }) => {
      setAuthedUser(data);
      setInitializing(false);
    });
  }, []);

  const onLoginSuccess = async ({ accessToken }) => {
    putAccessToken(accessToken);
    const { data } = await getUserLogged();
    setAuthedUser(data);
  };

  const onLogout = async () => {
    setAuthedUser(null);
    putAccessToken("");
  };

  if (initializing) {
    return null;
  }

  return (
    <div className="app-container">
      <NoteHeader authedUser={authedUser} logout={onLogout} />
      {authedUser ? (
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/archives" element={<ArchivesPage />} />
            <Route path="/notes/new" element={<AddPage />} />
            <Route path="/notes/:id" element={<DetailsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
      ) : (
        <main>
          <Routes>
            <Route
              path="/*"
              element={<LoginPage loginSuccess={onLoginSuccess} />}
            />
            <Route path="/register" element={<RegisterPage />} />
          </Routes>
        </main>
      )}
    </div>
  );
};

export default App;
