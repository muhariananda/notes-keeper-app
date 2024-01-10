import React from "react";
import PropTypes from "prop-types";
import parser from "html-react-parser";
import { useParams, useNavigate } from "react-router-dom";

import DetailPageAction from "../../components/DetailPageAction";
import NotFoundPage from "../NotFoundPage";
import { showFormattedDate } from "../../utils";

import {
  archiveNote,
  deleteNote,
  getNote,
  unarchiveNote,
} from "../../utils/local-data";

const DetailPage = ({ id, onArchive, onUnarchive, onDelete }) => {
  const note = getNote(id);

  if (!note) {
    <NotFoundPage message={"Catatan yang ingin ditampilkan tidak ditemukan"} />;
  }

  const formattedDate = showFormattedDate(note.createdAt);
  const parsedBody = parser(note.body);

  return (
    <section className="detail-page">
      <h3 className="detail-page__title">{note.title}</h3>
      <p className="detail-page__createdAt">{formattedDate}</p>
      <div className="detail-page__body">{parsedBody}</div>

      <DetailPageAction
        onArchive={onArchive}
        onUnarchive={onUnarchive}
        onDelete={onDelete}
        {...note}
      />
    </section>
  );
};

DetailPage.propType = {
  id: PropTypes.string.isRequired,
  onArchive: PropTypes.func.isRequired,
  onUnarchive: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

const DetailPageWrapper = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  function onDeleteHandler(id) {
    deleteNote(id);
    navigate("/");
  }

  function onArchiveHandler(id) {
    archiveNote(id);
    navigate("/archives");
  }

  function onUnarchiveHandler(id) {
    unarchiveNote(id);
    navigate("/");
  }

  return (
    <DetailPage
      id={id}
      onArchive={onArchiveHandler}
      onUnarchive={onUnarchiveHandler}
      onDelete={onDeleteHandler}
    />
  );
};

export default DetailPageWrapper;
