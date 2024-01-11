import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import AddPage from "./pages/note/AddPage";
import ArchivesPage from "./pages/archives/ArchivesPage";
import DetailsPage from "./pages/note/DetailsPage";
import HomePage from "./pages/home/HomePage";
import NoteHeader from "./components/NoteHeader";
import NotFoundPage from "./pages/NotFoundPage";
import MultiProvider from "./components/MultiProvider";
import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";
import useTheme from "./hooks/useTheme";
import useLocale from "./hooks/useLocale";
import { getUserLogged, putAccessToken } from "./utils/network-data";
import ThemeContext from "./contexts/ThemeContext";
import LocaleContext from "./contexts/LocaleContext";
import * as routePaths from "./utils/routePaths";

const App = () => {
  const [authedUser, setAuthedUser] = useState(null);
  const [initializing, setInitializing] = useState(true);
  const [theme, toggleTheme] = useTheme("dark");
  const [locale, toggleLocale] = useLocale("id");

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const { data } = await getUserLogged();
        setAuthedUser(data);
      } catch (error) {
        console.error(error);
      } finally {
        setInitializing(false);
      }
    };

    fetchUser();
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
    <MultiProvider
      contexts={[
        [ThemeContext, { theme, toggleTheme }],
        [LocaleContext, { locale, toggleLocale }],
      ]}
    >
      <div className="app-container">
        <NoteHeader authedUser={authedUser} logout={onLogout} />
        {authedUser ? (
          <main>
            <Routes>
              <Route path={routePaths.HOME_PATH} element={<HomePage />} />
              <Route
                path={routePaths.ARCHIVES_PATH}
                element={<ArchivesPage />}
              />
              <Route path={routePaths.ADD_NOTE_PATH} element={<AddPage />} />
              <Route path={routePaths.DETAILS_PATH} element={<DetailsPage />} />
              <Route
                path={routePaths.NOT_FOUND_PATH}
                element={<NotFoundPage />}
              />
            </Routes>
          </main>
        ) : (
          <main>
            <Routes>
              <Route
                path={routePaths.LOGIN_PATH}
                element={<LoginPage loginSuccess={onLoginSuccess} />}
              />
              <Route
                path={routePaths.REGISTER_PATH}
                element={<RegisterPage />}
              />
            </Routes>
          </main>
        )}
      </div>
    </MultiProvider>
  );
};

export default App;
