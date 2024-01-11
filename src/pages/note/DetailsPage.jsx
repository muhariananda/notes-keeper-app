import React, { useState, useEffect, useContext } from "react";
import parser from "html-react-parser";
import { useParams, useNavigate } from "react-router-dom";
import Loader from "../../components/Loader";
import DetailPageAction from "./components/DetailPageAction";
import NotFoundPage from "../NotFoundPage";
import { showFormattedDate } from "../../utils";
import {
  archiveNote,
  deleteNote,
  getNote,
  unarchiveNote,
} from "../../utils/network-data";
import LocalContext from "../../contexts/LocaleContext";
import { page } from "../../utils/locale";
import * as routePaths from "../../utils/routePaths";

const DetailsPage = () => {
  const { locale } = useContext(LocalContext);

  const { id } = useParams();
  const navigate = useNavigate();

  const [note, setNote] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fecthNote = async () => {
      try {
        const { data } = await getNote(id);
        setNote(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fecthNote();
  }, [id]);

  const handleDelete = async () => {
    await deleteNote(id);
    navigate(routePaths.HOME_PATH);
  };

  const handleArchive = async () => {
    await archiveNote(id);
    navigate(routePaths.ARCHIVES_PATH);
  };

  const handleUnarchive = async () => {
    await unarchiveNote(id);
    navigate(routePaths.HOME_PATH);
  };

  return (
    <section className="detail-page">
      {loading && <Loader />}

      {!loading && !note && (
        <NotFoundPage message={page[locale].noteNotFound} />
      )}

      {!loading && note && (
        <>
          <h3 className="detail-page__title">{note.title}</h3>

          <p className="detail-page__createdAt">
            {showFormattedDate(note.createdAt)}
          </p>

          <div className="detail-page__body">{parser(note.body)}</div>

          <DetailPageAction
            onArchive={handleArchive}
            onUnarchive={handleUnarchive}
            onDelete={handleDelete}
            {...note}
          />
        </>
      )}
    </section>
  );
};

export default DetailsPage;
