import React, { useState, useEffect } from "react";
import parser from "html-react-parser";
import { useParams, useNavigate } from "react-router-dom";

import DetailPageAction from "./components/DetailPageAction";
import NotFoundPage from "../NotFoundPage";
import { showFormattedDate } from "../../utils";
import {
  archiveNote,
  deleteNote,
  getNote,
  unarchiveNote,
} from "../../utils/network-data";

const DetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [note, setNote] = useState(null);
  const [initializing, setInitializing] = useState(true);

  useEffect(() => {
    getNote(id).then(({ data }) => {
      setNote(data);
      setInitializing(false);
    });
  }, [id]);

  const handleDelete = async () => {
    await deleteNote(id);
    navigate("/");
  };

  const handleArchive = async () => {
    await archiveNote(id);
    navigate("/archives");
  };

  const handleUnarchive = async () => {
    await unarchiveNote(id);
    navigate("/");
  };

  if (initializing) {
    return null;
  }

  if (!note) {
    return (
      <NotFoundPage
        message={"Catatan yang ingin ditampilkan tidak ditemukan"}
      />
    );
  }

  const parsedBody = parser(note.body);
  const formattedDate = showFormattedDate(note.createdAt);

  return (
    <section className="detail-page">
      <h3 className="detail-page__title">{note.title}</h3>
      <p className="detail-page__createdAt">{formattedDate}</p>
      <div className="detail-page__body">{parsedBody}</div>

      <DetailPageAction
        onArchive={handleArchive}
        onUnarchive={handleUnarchive}
        onDelete={handleDelete}
        {...note}
      />
    </section>
  );
};

export default DetailsPage;
